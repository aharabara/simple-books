import {BookDto} from "../dto/book.dto";

export class CreateBookCommand {
    constructor(
        private _book: BookDto
    ) {
    }


    get book(): BookDto {
        return this._book;
    }

}