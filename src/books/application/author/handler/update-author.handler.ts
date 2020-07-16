import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {classToPlain, plainToClass} from "class-transformer";
import {UpdateAuthorCommand} from "../command/update-author.command";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {NotFoundException} from "../../exception/not-found.exception";

@Injectable()
export class UpdateAuthorHandler {

    constructor(@InjectRepository(Author) private repository: Repository<Author>) {
    }

    public async handle(command: UpdateAuthorCommand): Promise<AuthorDto> {
        return await this
            .repository
            .findByIds([command.id])
            .then(async (authors: Author[]) => {
                if (authors.length === 0) {
                    throw new NotFoundException('Author not found');
                }
                const author = authors.pop();
                author.update(command.author)
                return await this.repository.save(author).then((author: Author) => {
                    return plainToClass(AuthorDto, classToPlain(author))
                });
            })
    }
}