import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {classToPlain, plainToClass} from "class-transformer";
import {CreateAuthorCommand} from "../../command/create-author.command";

@Injectable()
export class CreateAuthorHandler {
    public handle(command: CreateAuthorCommand): AuthorDto/*@fixme replace with id */ {
        return plainToClass(AuthorDto, classToPlain(new Author(command.author)))
    }
}