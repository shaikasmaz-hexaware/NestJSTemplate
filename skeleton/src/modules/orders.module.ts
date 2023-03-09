import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ordersController } from '../controllers/orders.controller';
import { ordersService } from '../services/orders.service';
import { ordersRepo } from '../repository/orders.repo';
import { orders, ordersSchema } from '../schemas/orders.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: orders.name, schema: ordersSchema }])
    ],
    controllers: [ordersController],
    providers: [ordersService, ordersRepo],
    exports: [ordersService, ordersRepo]
  })
  export class ordersModule { }