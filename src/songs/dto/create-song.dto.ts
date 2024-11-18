import { IsInt, IsString, IsNotEmpty } from "class-validator";

export class CreateSongDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    artist: string;

    @IsInt()
    length: number;

    @IsInt()
    price: number;
}
