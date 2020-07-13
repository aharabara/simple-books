import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {BookDto} from "../../../application/dto/book.dto";
import {CreateBookHandler} from "../../../application/book/handler/create-book.handler";
import {BooksByAuthorQuery} from "../../../application/book/query/books-by-author.query";
import {BooksByAuthorHandler} from "../../../application/book/handler/books-by-author.handler";
import {DeleteBookHandler} from "../../../application/book/handler/delete-book.handler";
import {CreateBookCommand} from "../../../application/book/command/create-book.command";
import {UpdateBookCommand} from "../../../application/book/command/update-book.command";
import {BooksByIdHandler} from "../../../application/book/handler/books-by-id.handler";
import {UpdateBookHandler} from "../../../application/book/handler/update-book.handler";
import {BooksByIdQuery} from "../../../application/book/query/books-by-id.query";
import {DeleteBookCommand} from "../../../application/book/command/delete-book.command";

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
