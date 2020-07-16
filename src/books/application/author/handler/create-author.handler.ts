import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {classToPlain, plainToClass} from "class-transformer";
import {CreateAuthorCommand} from "../command/create-author.command";
import {InjectRepository} from "@nestjs/typeorm";
import {InsertResult, Repository} from "typeorm";

@Injectable()
export class CreateAuthorHandler {
    constructor(@InjectRepository(Author) private repository: Repository<Author>) {
    }

    public async handle(command: CreateAuthorCommand): Promise<AuthorDto> {
        const newAuthor = new Author(command.author);
        return await this.repository
            .insert(newAuthor)
            .then(() => {
                return plainToClass(AuthorDto, classToPlain(newAuthor))
            })
    }
}