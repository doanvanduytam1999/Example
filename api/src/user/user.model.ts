import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, isString } from 'class-validator';

export class RegiesterDTO {

    @IsString()
    @ApiProperty({example: "Nguyen"})
    firstName: string;

    @IsString()
    @ApiProperty({example: "Tam"})
    lastName: string;

    @IsBoolean()
    @ApiProperty({example: true})
    isActive: boolean;
}
