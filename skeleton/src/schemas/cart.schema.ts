import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type cartDocument = cart & Document;

@Schema()
export class cart {
   
   @Prop()
   menuid: string; 
   
   @Prop()
   cartitems: string; 
   
   @Prop()
   ctotal: number; 
   
   @Prop()
   discval: number; 
   
   @Prop()
   coupval: number; 
   
   @Prop()
   coupcode: string; 
   
}

export const cartSchema = SchemaFactory.createForClass(cart);