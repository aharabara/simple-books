import {Controller, Get, Param, Query} from '@nestjs/common';
import {AuthorDto} from 'src/books/application/dto/author.dto';
import {SearchAuthorsHandler} from "../../../application/handler/search-authors.handler";
import {SearchAuthorsCommand} from "../../../application/command/search-authors-command";
import {AuthorsByIdHandler} from "../../../application/handler/authors-by-id.handler";
import {AuthorsByIdQuery} from "../../../application/command/authors-by-id-query";

@Controller('author')
export class AuthorController {
    private searchHandler: SearchAuthorsHandler;
    private authorsByIdHandler: AuthorsByIdHandler;

    constructor(
        searchHandler: SearchAuthorsHandler,
        authorsByIdHandler: AuthorsByIdHandler,
    ) {
        this.searchHandler = searchHandler;
        this.authorsByIdHandler = authorsByIdHandler;
    }

    @Get()
    public searchAuthors(@Query() command: SearchAuthorsCommand):AuthorDto[]{
        return this
            .searchHandler
            .handle(command)
    }
    @Get(':id')
    public getAuthor(@Param('id') id: string):AuthorDto|null{
        // get first
        return this
            .authorsByIdHandler
            .handle(new AuthorsByIdQuery([id]))
            .pop()
    }
}
