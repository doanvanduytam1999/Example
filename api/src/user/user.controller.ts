import { UsersService } from './user.service';
import { User } from './user.entity';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RegiesterDTO } from './user.model'
import {  ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiOperation,  ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get('')
    @ApiOperation({ summary: "Get all User" })
    @ApiOkResponse({type: [User], description: 'Successful' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    findAll(): Promise<User[]> {
        return this.usersService.findAll()
    }

    @Get(':id')
    @ApiOperation({summary: "Get user by ID"})
    @ApiOkResponse({type: User, description: 'Successful' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    get(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Post('/add')
    @ApiOperation({ summary: "Create user" })
    @ApiBody({type: RegiesterDTO})
    @ApiCreatedResponse({type: RegiesterDTO, description: 'User created' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    create(@Body() user: RegiesterDTO) {
        return this.usersService.create(user); 
    }

    @Put('/updateUser')
    @ApiOperation({summary:"Update user"})
    @ApiBody({type: User})
    @ApiOkResponse({type: User, description: 'Successfully updated' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    update(@Body() user: User) {
        return this.usersService.update(user);
    }

    @Delete('delete/:id')
    @ApiOperation({summary: "Delete user"})
    @ApiBody({type: User})
    @ApiOkResponse({ description: 'Successfully deleted' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    deleteUser(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
}
