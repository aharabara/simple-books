import {Injectable} from '@nestjs/common';
import {classToPlain, plainToClass} from "class-transformer";
import {BooksByIdQuery} from "../../query/books-by-id.query";
import {BookDto} from "../../dto/book.dto";
import {Book} from "../../../domain/book";

@Injectable()
export class BooksByIdHandler {
    public handle(query: BooksByIdQuery): BookDto[] {
        const books = classToPlain([
            new Book(),
            new Book(),
            new Book(),
        ]) as Array<BookDto>;
        return books.map((book) => plainToClass(BookDto, book));
    }
}