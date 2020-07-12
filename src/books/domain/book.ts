import {BookDto} from "../application/dto/book.dto";
import {Author} from "./author";

export class Book {
    private title: string
    private author: Author
    private isbn: string|null
    private publishedAt: Date|null
    private createdAt: Date|null
    private updatedAt: Date|null

    constructor(props: null|Partial<BookDto> = null) {
        if (props !== null){
            Object.assign(this, props)
        }
    }
}
