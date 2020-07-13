import {IsDateString, IsNotEmpty, IsString, Length} from "class-validator";

export class BookDto {
    @Length(1, 50)
    @IsNotEmpty()
    @IsString()
    public title: string

    @IsNotEmpty()
    @Length(9, 12)
    @IsString()
    public isbn: string

    @IsNotEmpty()
    @IsString()
    public author: string

    @IsNotEmpty()
    @IsDateString()
    public publishedAt: Date

    public createdAt: Date | null

    public updatedAt: Date | null
}