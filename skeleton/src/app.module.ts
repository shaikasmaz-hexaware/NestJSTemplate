import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ordersModule } from "./modules/orders.module";
import { cartModule } from "./modules/cart.module";
import { menuModule } from "./modules/menu.module";
import { restaurantModule } from "./modules/restaurant.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        ordersModule,
        cartModule,
        menuModule,
        restaurantModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
