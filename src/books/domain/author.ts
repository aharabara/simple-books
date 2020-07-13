import {AuthorDto} from "../application/dto/author.dto";
import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import {Exclude, Expose, Transform} from "class-transformer";

@Entity()
export class Author {
    @ObjectIdColumn()
    @Exclude()
    private _id: ObjectID;

    @Column() private firstName: string
    @Column() private lastName: string
    @Column() private birthday: Date
    @Column() private createdAt: Date
    @Column() private updatedAt: Date | null

    constructor(props: null | Partial<AuthorDto> = null) {
        if (props !== null) {
            Object.assign(this, props);
        }
    }

    @Expose()
    public id() {
        return this._id.toHexString();
    }

    update(changes: Partial<AuthorDto>): Author {
        Object.assign(this, changes);
        return this;
    }
}
