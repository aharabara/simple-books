import {Injectable} from '@nestjs/common';
import {DeleteBookCommand} from "../../command/delete-book.command";
import {DeleteAuthorCommand} from "../../command/delete-author.command";

@Injectable()
export class DeleteAuthorHandler {
    public handle(command: DeleteAuthorCommand): void {
        // delete author using command.id
    }
}