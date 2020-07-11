import { Module } from '@nestjs/common';
import {AuthorController} from "./port-adapters/http/controller/author.controller";
import {SearchAuthorsHandler} from "./application/handler/search-authors.handler";
import {AuthorsByIdHandler} from "./application/handler/authors-by-id.handler";

@Module({
    controllers : [AuthorController],
    providers : [SearchAuthorsHandler, AuthorsByIdHandler]
})
export class BooksModule {}
