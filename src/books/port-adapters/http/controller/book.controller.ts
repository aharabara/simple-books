import {Controller, Get, Param, Query, Post, Body, ValidationPipe, Put, Delete, HttpCode} from '@nestjs/common';
import {BooksByAuthorHandler} from "../../../application/handler/book/books-by-author.handler";
import {BooksByAuthorQuery} from "../../../application/query/books-by-author.query";
import {BookDto} from "../../../application/dto/book.dto";
import {BooksByIdHandler} from "../../../application/handler/book/books-by-id.handler";
import {BooksByIdQuery} from "../../../application/query/books-by-id.query";
import {CreateBookHandler} from "../../../application/handler/author/create-book.handler";
import {CreateBookCommand} from "../../../application/command/create-book.command";
import {UpdateBookHandler} from "../../../application/handler/author/update-book.handler";
import {UpdateBookCommand} from "../../../application/command/update-book.command";
import {DeleteBookCommand} from "../../../application/command/delete-book.command";
import {DeleteBookHandler} from "../../../application/handler/author/delete-book.handler";

@Controller('book')
export class BookController {
    constructor(
        private bookByAuthorHandler: BooksByAuthorHandler,
        private bookByIdHandler: BooksByIdHandler,
        private createBookHandler: CreateBookHandler,
        private updateBookHandler: UpdateBookHandler,
        private deleteBookHandler: DeleteBookHandler,
    ) {
    }

    @Get('/by-author/:author-id')
    public bookByAuthor(@Param('author-id') authorId: string): BookDto[] {
        return this
            .bookByAuthorHandler
            .handle(new BooksByAuthorQuery(authorId))
    }

    @Get(':id')
    public getBook(@Param('id') id: string): BookDto | null {
        // get first
        return this
            .bookByIdHandler
            .handle(new BooksByIdQuery([id]))
            .pop()
    }

    @Post()
    @HttpCode(201)
    public createBook(@Body() book: BookDto): BookDto | null {
        // get first
        return this
            .createBookHandler
            .handle(new CreateBookCommand(book));
    }

    @Put(':id')
    public updateBook(@Param('id') id: string, @Body() book: BookDto): BookDto | null {
        // get first
        return this
            .updateBookHandler
            .handle(new UpdateBookCommand(id, book));
    }

    @Delete(':id')
    public deleteBook(@Param('id') id: string): void {
        return this
            .deleteBookHandler
            .handle(new DeleteBookCommand(id));
    }
}
