import {AuthorDto} from "../../dto/author.dto";

export class UpdateAuthorCommand {
    constructor(
        private _id: string,
        private _author: Partial<AuthorDto>
    ) {
    }

    get author(): Partial<AuthorDto> {
        return this._author;
    }

    get id(): string {
        return this._id;
    }
}