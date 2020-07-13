import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {classToPlain, plainToClass} from "class-transformer";
import {SearchAuthorsQuery} from "../query/search-authors.query";
// import {InjectRepository} from "@nestjs/typeorm";
// import {Repository} from "typeorm/browser";

@Injectable()
export class SearchAuthorsHandler {
    // constructor(
    // @InjectRepository(Author) private authorsRepository: Repository<Author>
    // ) {
    // }

    public handle(query: SearchAuthorsQuery): AuthorDto[] {

        // const authors = await this
        //     .authorsRepository
        //     .createQueryBuilder('author')
        //     .limit(10)
        // .getMany()
        // return authors.map((author) => plainToClass(AuthorDto, classToPlain(author)));
        return [
            plainToClass(AuthorDto, classToPlain(new Author)),
            plainToClass(AuthorDto, classToPlain(new Author))
        ]
    }
}