import {AuthorDto} from "../application/dto/author.dto";

export class Author {
    private id: string;
    private firstName: string
    private lastName: string
    private birthday: Date
    private createdAt: Date
    private updatedAt: Date|null

    constructor(props: null|Partial<AuthorDto> = null) {
        if (props !== null){
            Object.assign(this, props);
        }
    }

    update(changes: Partial<AuthorDto>): Author {
        Object.assign(this, changes);
        return this;
    }
}
