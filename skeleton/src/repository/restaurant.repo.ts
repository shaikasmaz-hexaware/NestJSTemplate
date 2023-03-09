import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { restaurant, restaurantDocument } from 'src/schemas/restaurant.schema';

@Injectable()
export class restaurantRepo {
    constructor(
        @InjectModel(restaurant.name)
        private readonly restaurantModel: Model<restaurantDocument>) {}

    async create(data): Promise<restaurant> {
        return new this.restaurantModel(data).save();
    }

    async findAll(): Promise<restaurant[]> {
        return this.restaurantModel.find({})
            .exec();
    }

    async update(restaurantId, data): Promise<restaurant> {
        const filter = { _id: restaurantId };
        return this.restaurantModel.findOneAndUpdate(filter, data);
    }

    async delete(restaurantId): Promise<restaurant> {
        const filter = { _id: restaurantId };
        return this.restaurantModel.findByIdAndDelete(restaurantId);
    }
}