import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    Logger,
    Param,
    Patch,
    Post,
    Query
} from '@nestjs/common';
import {AuthorDto} from 'src/books/application/dto/author.dto';
import {
    AuthorsByIdHandler,
    AuthorsByIdQuery,
    CreateAuthorCommand,
    CreateAuthorHandler,
    DeleteAuthorCommand,
    DeleteAuthorHandler,
    SearchAuthorsHandler,
    SearchAuthorsQuery,
    UpdateAuthorCommand,
    UpdateAuthorHandler
} from "../../../application/author/author.service";


@Controller('author')
export class AuthorController {

    constructor(
        private searchHandler: SearchAuthorsHandler,
        private authorsByIdHandler: AuthorsByIdHandler,
        private createAuthorHandler: CreateAuthorHandler,
        private updateAuthorHandler: UpdateAuthorHandler,
        private deleteAuthorHandler: DeleteAuthorHandler,
    ) {
    }

    @Get()
    public searchAuthors(@Query() command: SearchAuthorsQuery): AuthorDto[] {
        return this
            .searchHandler
            .handle(command)
    }

    @Get(':id')
    public async getAuthor(@Param('id',) id: string): Promise<AuthorDto | null> {
        // get first
        return await this
            .authorsByIdHandler
            .handle(new AuthorsByIdQuery([id]))
            .then((authors: AuthorDto[]) => {
                if (authors.length === 0) {
                    throw new HttpException('Author was not found.', 404);
                }
                return authors.pop();
            })
    }

    @Post()
    @HttpCode(201)
    public async createAuthor(@Body() author: AuthorDto): Promise<AuthorDto> {
        // get first
        return await this
            .createAuthorHandler
            .handle(new CreateAuthorCommand(author))
            .then(a => {
                return a;
            })
    }

    @Patch(':id')
    public async updateAuthor(
        @Param('id') id: string,
        @Body() author: AuthorDto
    ): Promise<AuthorDto> {
        // get first
        return await this
            .updateAuthorHandler
            .handle(new UpdateAuthorCommand(id, author))
    }

    @Delete(':id')
    public deleteAuthor(@Param('id') id: string): void {
        this
            .deleteAuthorHandler
            .handle(new DeleteAuthorCommand(id))
    }
}
