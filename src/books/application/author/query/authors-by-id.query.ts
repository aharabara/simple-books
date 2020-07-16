import {ObjectID} from "mongodb";
import {ValidationException} from "../../exception/validation.exception";

export class AuthorsByIdQuery {
    private readonly _ids: ObjectID[];

    constructor(ids: string[]) {
        this._ids = ids.map((id: string): ObjectID => {
            try {
                return new ObjectID(id);
            } catch (e) {
                throw new ValidationException('Invalid author ID provided.');
            }
        })
    }

    get ids(): ObjectID[] {
        return this._ids;
    }
}