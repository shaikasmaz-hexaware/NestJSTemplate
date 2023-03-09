import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ordersDocument = orders & Document;

@Schema()
export class orders {
   
   @Prop()
   cartid: string; 
   
   @Prop({required:true})
   odate: Date; 
   
   @Prop({required:true})
   cname: string; 
   
   @Prop({required:true})
   cstreet: string; 
   
   @Prop({required:true})
   cpostal: number; 
   
   @Prop({required:true})
   ccity: string; 
   
   @Prop({required:true})
   cphone: string; 
   
}

export const ordersSchema = SchemaFactory.createForClass(orders);