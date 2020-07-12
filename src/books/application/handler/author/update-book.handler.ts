import {Injectable} from '@nestjs/common';
import {classToPlain, plainToClass} from "class-transformer";
import {Book} from "../../../domain/book";
import {BookDto} from "../../dto/book.dto";
import {UpdateBookCommand} from "../../command/update-book.command";

@Injectable()
export class UpdateBookHandler {
    public handle(command: UpdateBookCommand): BookDto/*@fixme replace with id */ {
        return plainToClass(BookDto, classToPlain(new Book(command.book)))
    }
}