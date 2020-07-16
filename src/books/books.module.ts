import {Logger, Module} from '@nestjs/common';
import {AuthorController} from "./port-adapters/http/controller/author.controller";
import {BookController} from "./port-adapters/http/controller/book.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book} from "./domain/book";
import {Author} from "./domain/author";
import {
    AuthorsByIdHandler,
    CreateAuthorHandler,
    DeleteAuthorHandler,
    SearchAuthorsHandler,
    UpdateAuthorHandler
} from "./application/author/author.service";
import {
    BooksByAuthorHandler,
    BooksByIdHandler,
    CreateBookHandler,
    DeleteBookHandler,
    UpdateBookHandler
} from "./application/book/book.service";

@Module({
    imports: [TypeOrmModule.forFeature([Author, Book])],
    controllers: [AuthorController, BookController],
    providers: [
        SearchAuthorsHandler,
        AuthorsByIdHandler,
        CreateAuthorHandler,
        UpdateAuthorHandler,
        DeleteAuthorHandler,
        BooksByAuthorHandler,
        BooksByIdHandler,
        CreateBookHandler,
        UpdateBookHandler,
        DeleteBookHandler,
        Logger
    ]
})
export class BooksModule {
}
