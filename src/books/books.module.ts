import { Module } from '@nestjs/common';
import {AuthorController} from "./port-adapters/http/controller/author.controller";
import {SearchAuthorsHandler} from "./application/handler/search-authors.handler";

@Module({
    controllers : [AuthorController],
    providers : [SearchAuthorsHandler]
})
export class BooksModule {}
