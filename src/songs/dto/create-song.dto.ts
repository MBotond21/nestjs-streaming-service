import { IsInt, IsString, IsNotEmpty, Min, Max } from "class-validator";

export class CreateSongDto {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    artist: string;

    @IsInt()
    @Min(0)
    length: number;

    @IsInt()
    @Min(0)
    price: number;

    @IsInt()
    @Min(1)
    @Max(5)
    rating: number;

    playlist = null; 
}
