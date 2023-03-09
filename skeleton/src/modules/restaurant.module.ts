import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { restaurantController } from '../controllers/restaurant.controller';
import { restaurantService } from '../services/restaurant.service';
import { restaurantRepo } from '../repository/restaurant.repo';
import { restaurant, restaurantSchema } from '../schemas/restaurant.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: restaurant.name, schema: restaurantSchema }])
    ],
    controllers: [restaurantController],
    providers: [restaurantService, restaurantRepo],
    exports: [restaurantService, restaurantRepo]
  })
  export class restaurantModule { }