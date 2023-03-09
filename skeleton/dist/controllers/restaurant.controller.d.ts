import { restaurantDto } from '../dto/restaurant-dto.dto';
import { restaurantService } from '../services/restaurant.service';
export declare class restaurantController {
    private readonly restaurantService;
    constructor(restaurantService: restaurantService);
    create(restaurantDto: restaurantDto): Promise<import("../schemas/restaurant.schema").restaurant>;
    findAll(): Promise<import("../schemas/restaurant.schema").restaurant[]>;
    update(id: string, restaurantDto: restaurantDto): Promise<import("../schemas/restaurant.schema").restaurant>;
    delete(id: string): Promise<import("../schemas/restaurant.schema").restaurant>;
}
