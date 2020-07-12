import {Body, Controller, Get, Param, Post, Query, Put, Delete, HttpCode} from '@nestjs/common';
import {AuthorDto} from 'src/books/application/dto/author.dto';
import {SearchAuthorsHandler} from "../../../application/handler/author/search-authors.handler";
import {AuthorsByIdHandler} from "../../../application/handler/author/authors-by-id.handler";
import {SearchAuthorsQuery} from "../../../application/query/search-authors.query";
import {AuthorsByIdQuery} from "../../../application/query/authors-by-id.query";
import {CreateAuthorCommand} from "../../../application/command/create-author.command";
import {CreateAuthorHandler} from "../../../application/handler/author/create-author.handler";
import {UpdateAuthorCommand} from "../../../application/command/update-author.command";
import {UpdateAuthorHandler} from "../../../application/handler/author/update-author.handler";
import {DeleteAuthorHandler} from "../../../application/handler/author/delete-author.handler";
import {DeleteAuthorCommand} from "../../../application/command/delete-author.command";

@Controller('author')
export class AuthorController {

    constructor(
        private searchHandler: SearchAuthorsHandler,
        private authorsByIdHandler: AuthorsByIdHandler,
        private createAuthorHandler: CreateAuthorHandler,
        private updateAuthorHandler: UpdateAuthorHandler,
        private deleteAuthorHandler: DeleteAuthorHandler
    ) {
    }

    @Get()
    public searchAuthors(@Query() command: SearchAuthorsQuery):AuthorDto[]{
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

    @Post()
    @HttpCode(201)
    public createAuthor(@Body() author: AuthorDto):AuthorDto{
        // get first
        return this
            .createAuthorHandler
            .handle(new CreateAuthorCommand(author))
    }
    @Put(':id')
    public updateAuthor(@Param('id') id:string, @Body() author: AuthorDto):AuthorDto{
        // get first
        return this
            .updateAuthorHandler
            .handle(new UpdateAuthorCommand(id, author))
    }
    @Delete(':id')
    public deleteAuthor(@Param('id') id:string):void{
        // get first
        return this
            .deleteAuthorHandler
            .handle(new DeleteAuthorCommand(id))
    }
}
