import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, isString } from 'class-validator';

export class RegiesterDTO {

    @IsString()
    @ApiProperty({example: "Nguyen"})
    firstName: string;

    @IsString()
    @ApiProperty({example: "Tam"})
    lastName: string;

    @IsString()
    @ApiProperty({example: true})
    isActive: boolean;
}
