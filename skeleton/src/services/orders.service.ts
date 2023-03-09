import { Injectable } from '@nestjs/common';
import { ordersRepo } from '../repository/orders.repo';
import { orders } from '../schemas/orders.schema';
@Injectable()
export class ordersService {
    constructor(private readonly ordersRepo: ordersRepo) {}
    async findAll(): Promise<orders[]> {
        return this.ordersRepo.findAll();
    }
    async create(data): Promise<orders> {
        data.createddate = new Date();
        return this.ordersRepo.create(data);
    }
    async update(ordersId, data): Promise<orders> {
        return this.ordersRepo.update(ordersId, data);
    }
    async delete(ordersId): Promise<orders> {
        return this.ordersRepo.delete(ordersId);
    }
}