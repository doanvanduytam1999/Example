import { from } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import {RegiesterDTO} from './user.model';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }

  async update(user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(user.id, user);
  }

  async create(user: RegiesterDTO): Promise<InsertResult> {
    return await this.usersRepository.insert(user);
  }
}
