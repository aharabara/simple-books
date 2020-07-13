import {BookDto} from "../application/dto/book.dto";
import {Author} from "./author";
import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Book {

    @PrimaryColumn({nullable: false, type: "string",})
    private isbn: string | null

    @Column() private title: string
    @Column() private author: Author
    @Column() private publishedAt: Date | null
    @Column() private createdAt: Date | null
    @Column() private updatedAt: Date | null

    constructor(props: null | Partial<BookDto> = null) {
        if (props !== null) {
            Object.assign(this, props)
        }
    }
}
