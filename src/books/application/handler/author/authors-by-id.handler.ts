import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {classToPlain, plainToClass} from "class-transformer";
import {AuthorsByIdQuery} from "../../query/authors-by-id.query";

@Injectable()
export class AuthorsByIdHandler {
    public handle(query: AuthorsByIdQuery): AuthorDto[] {
        const authors = classToPlain([
            new Author(),
            new Author(),
            new Author(),
        ]) as Array<AuthorDto>;
        return authors.map((author) => plainToClass(AuthorDto, author));
    }
}