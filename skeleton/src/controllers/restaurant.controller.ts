import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { restaurantDto } from '../dto/restaurant-dto.dto';
import { restaurantService } from '../services/restaurant.service';


@Controller('restaurant')
export class restaurantController {
    constructor(private readonly restaurantService: restaurantService) { }

    @Post()
    async create(@Body() restaurantDto: restaurantDto) {
        const res = this.restaurantService.create(restaurantDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.restaurantService.findAll();
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() restaurantDto: restaurantDto) {
        return this.restaurantService.update(id, restaurantDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.restaurantService.delete(id);
    }
}