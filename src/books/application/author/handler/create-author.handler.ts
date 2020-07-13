import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {classToPlain, plainToClass} from "class-transformer";
import {CreateAuthorCommand} from "../command/create-author.command";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, InsertResult} from "typeorm";

@Injectable()
export class CreateAuthorHandler {
    constructor(@InjectRepository(Author) private repository: Repository<Author>) {
    }

    public async handle(command: CreateAuthorCommand): Promise<AuthorDto> {
        const newAuthor = new Author(command.author);
        return await this.repository
            .insert(newAuthor)
            .then((result: InsertResult) => {
                return plainToClass(AuthorDto, classToPlain(newAuthor))
            })
            .catch(error => {
                console.log(error);
                throw new Error('Author cannot be saved.')
            })
    }
}