import {Injectable} from '@nestjs/common';
import {classToPlain, plainToClass} from "class-transformer";
import {CreateBookCommand} from "../../command/create-book.command";
import {Book} from "../../../domain/book";
import {BookDto} from "../../dto/book.dto";

@Injectable()
export class CreateBookHandler {
    public handle(command: CreateBookCommand): BookDto/*@fixme replace with id */ {
        return plainToClass(BookDto, classToPlain(new Book(command.book)))
    }
}