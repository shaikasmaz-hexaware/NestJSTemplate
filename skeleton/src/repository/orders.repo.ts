import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { orders, ordersDocument } from 'src/schemas/orders.schema';

@Injectable()
export class ordersRepo {
    constructor(
        @InjectModel(orders.name)
        private readonly ordersModel: Model<ordersDocument>) {}

    async create(data): Promise<orders> {
        return new this.ordersModel(data).save();
    }

    async findAll(): Promise<orders[]> {
        return this.ordersModel.find({})
            .exec();
    }

    async update(ordersId, data): Promise<orders> {
        const filter = { _id: ordersId };
        return this.ordersModel.findOneAndUpdate(filter, data);
    }

    async delete(ordersId): Promise<orders> {
        const filter = { _id: ordersId };
        return this.ordersModel.findByIdAndDelete(ordersId);
    }
}