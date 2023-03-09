import { Model } from 'mongoose';
import { restaurant, restaurantDocument } from 'src/schemas/restaurant.schema';
export declare class restaurantRepo {
    private readonly restaurantModel;
    constructor(restaurantModel: Model<restaurantDocument>);
    create(data: any): Promise<restaurant>;
    findAll(): Promise<restaurant[]>;
    update(restaurantId: any, data: any): Promise<restaurant>;
    delete(restaurantId: any): Promise<restaurant>;
}
