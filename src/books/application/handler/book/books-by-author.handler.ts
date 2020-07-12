import {Injectable} from '@nestjs/common';
import {classToPlain, plainToClass} from "class-transformer";
import {BooksByAuthorQuery} from "../../query/books-by-author.query";
import {BookDto} from "../../dto/book.dto";
import {Book} from "../../../domain/book";

@Injectable()
export class BooksByAuthorHandler {

    public handle(query: BooksByAuthorQuery): BookDto[] {

        return [
            plainToClass(BookDto, classToPlain(new Book)),
            plainToClass(BookDto, classToPlain(new Book))
        ]
    }
}