import {Injectable} from '@nestjs/common';
import {DeleteAuthorCommand} from "../command/delete-author.command";
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "../../../domain/author";
import {Repository} from "typeorm";
import {DeleteResult} from "typeorm/browser";
import {NotFoundException} from '../../exception/not-found.exception';

@Injectable()
export class DeleteAuthorHandler {

    constructor(@InjectRepository(Author) private repository: Repository<Author>) {
    }

    public async handle(command: DeleteAuthorCommand): Promise<number> {
        return await this.repository
            .delete(command.id.toHexString())
            .then((value: DeleteResult) => {
                if (value.affected === 0) {
                    throw new NotFoundException('Author was not found.');
                }
                return value.affected;
            })
    }
}