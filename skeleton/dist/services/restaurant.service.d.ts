import { restaurantRepo } from '../repository/restaurant.repo';
import { restaurant } from '../schemas/restaurant.schema';
export declare class restaurantService {
    private readonly restaurantRepo;
    constructor(restaurantRepo: restaurantRepo);
    findAll(): Promise<restaurant[]>;
    create(data: any): Promise<restaurant>;
    update(restaurantId: any, data: any): Promise<restaurant>;
    delete(restaurantId: any): Promise<restaurant>;
}
