import {Module} from '@nestjs/common';
import {AuthorController} from "./port-adapters/http/controller/author.controller";
import {BookController} from "./port-adapters/http/controller/book.controller";
import {CreateBookHandler} from "./application/book/handler/create-book.handler";
import {DeleteAuthorHandler} from "./application/author/handler/delete-author.handler";
import {AuthorsByIdHandler} from "./application/author/handler/authors-by-id.handler";
import {UpdateAuthorHandler} from "./application/author/handler/update-author.handler";
import {SearchAuthorsHandler} from "./application/author/handler/search-authors.handler";
import {CreateAuthorHandler} from "./application/author/handler/create-author.handler";
import {BooksByAuthorHandler} from "./application/book/handler/books-by-author.handler";
import {DeleteBookHandler} from "./application/book/handler/delete-book.handler";
import {BooksByIdHandler} from "./application/book/handler/books-by-id.handler";
import {UpdateBookHandler} from "./application/book/handler/update-book.handler";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book} from "./domain/book";
import {Author} from "./domain/author";

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
    ]
})
export class BooksModule {
}
