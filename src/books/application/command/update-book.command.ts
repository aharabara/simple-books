import {BookDto} from "../dto/book.dto";

export class UpdateBookCommand {
    constructor(
        private _id: string,
        private _book: BookDto
    ) {
    }

    get book(): BookDto {
        return this._book;
    }

    get id(): string {
        return this._id;
    }
}