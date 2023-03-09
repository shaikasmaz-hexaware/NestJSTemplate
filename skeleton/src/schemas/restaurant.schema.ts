import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type restaurantDocument = restaurant & Document;

@Schema()
export class restaurant {
   
   @Prop()
   rid: string; 
   
   @Prop({required:true})
   rname: string; 
   
   @Prop({required:true})
   rzip: number; 
   
   @Prop({required:true})
   raddress: string; 
   
   @Prop({required:true})
   rstate: string; 
   
   @Prop({required:true})
   rcity: string; 
   
   @Prop({required:true})
   rphone: string; 
   
   @Prop({required:true})
   kphone: string; 
   
}

export const restaurantSchema = SchemaFactory.createForClass(restaurant);