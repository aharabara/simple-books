import {Injectable} from '@nestjs/common';
import {Author} from "../../domain/author";
import {AuthorDto} from "../dto/author.dto";
import {SearchAuthorsCommand} from "../command/search-authors-command";
import {classToPlain, plainToClass} from "class-transformer";

@Injectable()
export class SearchAuthorsHandler {
    public handle(command: SearchAuthorsCommand): AuthorDto[] {

        const authors = classToPlain([
            new Author(),
            new Author(),
            new Author(),
        ]) as Array<AuthorDto>;
        return authors.map((author) => plainToClass(AuthorDto, author));
    }
}