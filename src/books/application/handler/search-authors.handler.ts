import {classToPlain} from "class-transformer";
import {Injectable} from '@nestjs/common';
import {Author} from "../../domain/author";
import {SearchAuthorsCommand} from "../command/search-authors-command";

@Injectable()
export class SearchAuthorsHandler {
    public handle(command: SearchAuthorsCommand): any[] {

        console.log(classToPlain(new Author()));
        return [
            classToPlain(new Author()),
            {test : "test"},
            new Author(),
            new Author(),
        ];
    }
}