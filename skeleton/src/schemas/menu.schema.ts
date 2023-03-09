import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   
   @Prop({required:true})
   mImage: string;

   @Prop({required:true})
   mname: string; 
   
   @Prop({required:true})
   mdesc: string; 
   
   @Prop({required:true})
   mprice: number; 
   
   @Prop({type:[]})
   toppings: [
      {
        toname: { type: String,required: true },
        toprice: { type: Number,required: true },
      },
    ] ; 
   
   @Prop({required:true})
   mquant: number; 
   
   @Prop({required:true, default:false})
   combo: boolean; 
   
}

export const menuSchema = SchemaFactory.createForClass(menu);