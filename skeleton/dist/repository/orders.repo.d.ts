import { Model } from 'mongoose';
import { orders, ordersDocument } from 'src/schemas/orders.schema';
export declare class ordersRepo {
    private readonly ordersModel;
    constructor(ordersModel: Model<ordersDocument>);
    create(data: any): Promise<orders>;
    findAll(): Promise<orders[]>;
    update(ordersId: any, data: any): Promise<orders>;
    delete(ordersId: any): Promise<orders>;
}
