import { Phone } from './phone.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PhoneService {
    constructor(
        @InjectRepository(Phone)
        private usersRepository: Repository<Phone>,
      ) { }
    
      findAll(): Promise<Phone[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: number): Promise<Phone> {
        return this.usersRepository.findOne(id);
      }
    
      async remove(id: number): Promise<DeleteResult> {
        return await this.usersRepository.delete(id);
      }
    
      async update(phone: Phone): Promise<UpdateResult> {
        return await this.usersRepository.update(phone.id, phone);
      }
    
      async create(phone: Phone): Promise<InsertResult> {
        return await this.usersRepository.insert(phone);
      }
}
