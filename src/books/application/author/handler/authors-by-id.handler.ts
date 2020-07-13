import {Injectable} from '@nestjs/common';
import {Author} from "../../../domain/author";
import {AuthorDto} from "../../dto/author.dto";
import {classToPlain, plainToClass} from "class-transformer";
import {AuthorsByIdQuery} from "../query/authors-by-id.query";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ObjectId} from "mongodb";

@Injectable()
export class AuthorsByIdHandler {
    constructor(@InjectRepository(Author) private repository: Repository<Author>) {
    }

    public async handle(query: AuthorsByIdQuery): Promise<AuthorDto[]> {
        return await this.repository
            .findByIds(query.ids.map(id => new ObjectId(id)))
            .then((authors: Author[]) => {
                return (classToPlain(authors) as Array<any>)
                    .map((author) => plainToClass(AuthorDto, author));

            }).catch(error => {
                console.log(error);
                throw new Error(error.toString());
            })
    }
}