import { UsersService } from './user.service';
import { User } from './user.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UsersService) {
    }
  
    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }

    @Get(':id')
    get(@Param() params) {
        return this.usersService.findOne(params.id);
    }

    @Post('/add')
    create(@Body() user: User) {
        return this.usersService.create(user);
    }

    @Put('/update')
    update(@Body() user: User) {
        return this.usersService.update(user);
    }

    @Delete('delete/:id')
    deleteUser(@Param() params) {
        return this.usersService.remove(params.id);
    }
}
