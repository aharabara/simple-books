import {AuthorDto} from "../dto/author.dto";

export class CreateAuthorCommand {
    constructor(private _author: AuthorDto) {
    }


    get author(): AuthorDto {
        return this._author;
    }
}