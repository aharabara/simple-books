import {Controller, Get, Query} from '@nestjs/common';
import {SearchAuthorsHandler} from "../../../application/handler/search-authors.handler";
import {Author} from "../../../domain/author"; /*@fixme replace with DTO */
import {SearchAuthorsCommand} from "../../../application/command/search-authors-command";

@Controller('author')
export class AuthorController {
    private _searchHandler: SearchAuthorsHandler;
    constructor(searchHandler: SearchAuthorsHandler) {
        this._searchHandler = searchHandler;
    }

    @Get()
    public search(@Query() command: SearchAuthorsCommand):Author[]{
        return this._searchHandler.handle(command)
    }
}
