import { ordersDto } from '../dto/orders-dto.dto';
import { ordersService } from '../services/orders.service';
export declare class ordersController {
    private readonly ordersService;
    constructor(ordersService: ordersService);
    create(ordersDto: ordersDto): Promise<import("../schemas/orders.schema").orders>;
    findAll(): Promise<import("../schemas/orders.schema").orders[]>;
    update(id: string, ordersDto: ordersDto): Promise<import("../schemas/orders.schema").orders>;
    delete(id: string): Promise<import("../schemas/orders.schema").orders>;
}
