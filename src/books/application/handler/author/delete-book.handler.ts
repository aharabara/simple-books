import {Injectable} from '@nestjs/common';
import {DeleteBookCommand} from "../../command/delete-book.command";

@Injectable()
export class DeleteBookHandler {
    public handle(command: DeleteBookCommand): void {
        // delete author using command.id
    }
}