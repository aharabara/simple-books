import {IsNotEmpty} from "class-validator";
import {Exclude} from "class-transformer";

export class AuthorDto {

    public id: string;

    @IsNotEmpty({groups : ['create']})
    public firstName: string;
    @IsNotEmpty({groups : ['create']})
    public lastName: string;

    @IsNotEmpty({groups : ['create']})
    public birthday: Date

    @Exclude()
    public createdAt: Date | null
    @Exclude()
    public updatedAt: Date | null
}