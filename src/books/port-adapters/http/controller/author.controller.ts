import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    HttpCode, HttpException,
    Param,
    Post,
    Put,
    Query,
    UseInterceptors
} from '@nestjs/common';
import {AuthorDto} from 'src/books/application/dto/author.dto';
import {AuthorsByIdHandler} from "../../../application/author/handler/authors-by-id.handler";
import {DeleteAuthorHandler} from "../../../application/author/handler/delete-author.handler";
import {UpdateAuthorHandler} from "../../../application/author/handler/update-author.handler";
import {SearchAuthorsHandler} from "../../../application/author/handler/search-authors.handler";
import {CreateAuthorHandler} from "../../../application/author/handler/create-author.handler";
import {CreateAuthorCommand} from "../../../application/author/command/create-author.command";
import {UpdateAuthorCommand} from "../../../application/author/command/update-author.command";
import {SearchAuthorsQuery} from "../../../application/author/query/search-authors.query";
import {DeleteAuthorCommand} from "../../../application/author/command/delete-author.command";
import {AuthorsByIdQuery} from "../../../application/author/query/authors-by-id.query";

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
    public searchAuthors(@Query() command: SearchAuthorsQuery): AuthorDto[] {
        return this
            .searchHandler
            .handle(command)
    }

    @Get(':id')
    public async getAuthor(@Param('id') id: string): Promise<AuthorDto | null> {
        // get first
        return await this
            .authorsByIdHandler
            .handle(new AuthorsByIdQuery([id]))
            .then(authors => authors.pop())
            .catch(error => {
                console.log(error)
                throw new HttpException("Something bad happened", 400)
            })
    }

    @Post()
    @HttpCode(201)
    // @UseInterceptors(ClassSerializerInterceptor)
    public async createAuthor(@Body() author: AuthorDto): Promise<AuthorDto> {
        // get first
        return await this
            .createAuthorHandler
            .handle(new CreateAuthorCommand(author))
            .then(a => {
                return a;
            })
    }

    @Put(':id')
    public updateAuthor(@Param('id') id: string, @Body() author: AuthorDto): AuthorDto {
        // get first
        return this
            .updateAuthorHandler
            .handle(new UpdateAuthorCommand(id, author))
    }

    @Delete(':id')
    public deleteAuthor(@Param('id') id: string): void {
        // get first
        return this
            .deleteAuthorHandler
            .handle(new DeleteAuthorCommand(id))
    }
}
