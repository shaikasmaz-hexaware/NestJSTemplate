import { ordersRepo } from '../repository/orders.repo';
import { orders } from '../schemas/orders.schema';
export declare class ordersService {
    private readonly ordersRepo;
    constructor(ordersRepo: ordersRepo);
    findAll(): Promise<orders[]>;
    create(data: any): Promise<orders>;
    update(ordersId: any, data: any): Promise<orders>;
    delete(ordersId: any): Promise<orders>;
}
