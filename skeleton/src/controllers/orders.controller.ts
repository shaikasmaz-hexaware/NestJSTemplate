import { Body, Controller, Delete, Get, Param, Post , Put} from '@nestjs/common';
import { ordersDto } from '../dto/orders-dto.dto';
import { ordersService } from '../services/orders.service';


@Controller('orders')
export class ordersController {
    constructor(private readonly ordersService: ordersService) { }

    @Post()
    async create(@Body() ordersDto: ordersDto) {
        const res = this.ordersService.create(ordersDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.ordersService.findAll();
    }

    @Put('/:id')
    update(@Param('id') id: string, @Body() ordersDto: ordersDto) {
        return this.ordersService.update(id, ordersDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.ordersService.delete(id);
    }
}