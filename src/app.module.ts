import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {BooksModule} from './books/books.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Book} from "./books/domain/book";
import {Author} from "./books/domain/author";
import {ConfigModule} from "@nestjs/config";

@Module({
    controllers: [AppController],
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'mongodb',
            host: process.env.DB_HOSTNAME,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [Book, Author],
            synchronize: true,
        }),
        BooksModule,
    ]
})
export class AppModule {
}
