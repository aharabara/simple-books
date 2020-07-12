import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {SearchAuthorsQuery} from "../../query/search-authors.query";
import {classToPlain, plainToClass} from "class-transformer";
import {CreateAuthorCommand} from "../../command/create-author.command";
import {UpdateAuthorCommand} from "../../command/update-author.command";
// import {InjectRepository} from "@nestjs/typeorm";
// import {Repository} from "typeorm/browser";

@Injectable()
export class UpdateAuthorHandler {
    public handle(command: UpdateAuthorCommand): AuthorDto/*@fixme replace with id */ {
        let author = new Author();/**@fixme get author by id */
        return plainToClass(AuthorDto, classToPlain(author.update(command.author)))
    }
}