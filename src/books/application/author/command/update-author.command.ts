import {AuthorDto} from "../../dto/author.dto";
import {ObjectID} from "mongodb";
import {ValidationException} from "../../exception/validation.exception";

export class UpdateAuthorCommand {
    private readonly _id: ObjectID;

    constructor(id: string, private _author: AuthorDto) {
        try {
            this._id = new ObjectID(id)
        } catch (e) {
            throw new ValidationException('Invalid author ID provided.');
        }
    }

    get author(): Partial<AuthorDto> {
        return this._author;
    }

    get id(): ObjectID {
        return this._id;
    }
}