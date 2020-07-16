import {ObjectId} from "mongodb";
import {ValidationException} from "../../exception/validation.exception";

export class DeleteAuthorCommand {
    private readonly _id: ObjectId;

    constructor(id: string) {
        try {
            this._id = new ObjectId(id)
        } catch (e) {
            throw new ValidationException('Invalid author ID provided.');
        }
    }

    get id(): ObjectId {
        return this._id;
    }
}