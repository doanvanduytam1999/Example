import { PhoneService } from './phone.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Phone } from './phone.entity';

@ApiTags('phone')
@Controller('phone')
export class PhoneController {
    constructor(private readonly phoneService: PhoneService) {
    }

    @Get('')
    @ApiOperation({ summary: "Get all Phone" })
    @ApiOkResponse({type: [Phone], description: 'Successful' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    findAll(): Promise<Phone[]> {
        return this.phoneService.findAll()
    }

    @Get(':id')
    @ApiOperation({summary: "Get phone by ID"})
    @ApiOkResponse({type: Phone, description: 'Successful' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    get(@Param('id') id: number) {
        return this.phoneService.findOne(id);
    }

    @Post('/add')
    @ApiOperation({ summary: "Create phone" })
    @ApiBody({type: Phone})
    @ApiCreatedResponse({type: Phone, description: 'User created' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    create(@Body() user: Phone) {
        return this.phoneService.create(user); 
    }

    @Put('/updateUser')
    @ApiOperation({summary:"Update phone"})
    @ApiBody({type: Phone})
    @ApiOkResponse({type: Phone, description: 'Successfully updated' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    update(@Body() user: Phone) {
        return this.phoneService.update(user);
    }

    @Delete('delete/:id')
    @ApiOperation({summary: "Delete phone"})
    @ApiOkResponse({ description: 'Successfully deleted' })
    @ApiForbiddenResponse({ description: 'Forbidden' })
    deleteUser(@Param('id') id: number) {
        return this.phoneService.remove(id);
    }
}
