import { Injectable } from '@nestjs/common';
import { restaurantRepo } from '../repository/restaurant.repo';
import { restaurant } from '../schemas/restaurant.schema';

@Injectable()
export class restaurantService {
    constructor(
        private readonly restaurantRepo: restaurantRepo
    ) { }

    async findAll(): Promise<restaurant[]> {
        return this.restaurantRepo.findAll();
    }

    async create(data): Promise<restaurant> {
        data.createddate = new Date();
        return this.restaurantRepo.create(data);
    }

    async update(restaurantId, data): Promise<restaurant> {
        return this.restaurantRepo.update(restaurantId, data);
    }

    async delete(restaurantId): Promise<restaurant> {
        return this.restaurantRepo.delete(restaurantId);
    }
}