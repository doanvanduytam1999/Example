import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';


@Entity()
export class User {
  @ApiProperty({example: 1})
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty({example: "Nguyen"})
  @Column()
  firstName: string;

  @ApiProperty({example: "Tam"})
  @Column()
  lastName: string;
    
  @ApiProperty({example: true})
  @Column({ default: true })
  isActive: boolean;
}