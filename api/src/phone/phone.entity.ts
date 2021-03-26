import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';


@Entity()
export class Phone {
  @ApiProperty({example: "DT1"})
  @PrimaryColumn()
  id: string;
  
  @ApiProperty({example: "IPhone 12"})
  @Column()
  name: string;

  @ApiProperty({example: 799})
  @Column()
  price: number;
    
  @ApiProperty({example: "A large phone with one of the best screens"})
  @Column()
  description: string;

  @ApiProperty({example: "assets/img/iphone12.jpg"})
  @Column()
  image: string

}