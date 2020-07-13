import {IsNotEmpty} from "class-validator";

export class AuthorDto {

    public id: string;

    @IsNotEmpty()
    public firstName: string;
    @IsNotEmpty()
    public lastName: string;

    @IsNotEmpty()
    public birthday: Date

    public createdAt: Date | null
    public updatedAt: Date | null
}