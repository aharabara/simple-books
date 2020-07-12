import { Module } from '@nestjs/common';
import {AuthorController} from "./port-adapters/http/controller/author.controller";
import {SearchAuthorsHandler} from "./application/handler/author/search-authors.handler";
import {AuthorsByIdHandler} from "./application/handler/author/authors-by-id.handler";
import {BookController} from "./port-adapters/http/controller/book.controller";
import {BooksByAuthorHandler} from "./application/handler/book/books-by-author.handler";
import {BooksByIdHandler} from "./application/handler/book/books-by-id.handler";
import {CreateAuthorHandler} from "./application/handler/author/create-author.handler";
import {UpdateAuthorHandler} from "./application/handler/author/update-author.handler";
import {CreateBookHandler} from "./application/handler/author/create-book.handler";
import {UpdateBookHandler} from "./application/handler/author/update-book.handler";
import {DeleteAuthorHandler} from "./application/handler/author/delete-author.handler";
import {DeleteBookHandler} from "./application/handler/author/delete-book.handler";

@Module({
    // imports: [TypeOrmModule.forFeature([Author, Book])],
    controllers : [AuthorController, BookController],
    providers : [
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
export class BooksModule {}
