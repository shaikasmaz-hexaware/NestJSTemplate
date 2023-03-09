import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class menuDto {
    
    @IsString()
    @IsNotEmpty()
    mname: string; 
    
    @IsUrl()
    mImage: string;
    
    @IsString()
    @IsNotEmpty()
    mdesc: string; 
    
    @IsNumber()
    mprice: number; 
    
    @IsArray()
    toppings: [
            {
              toname: { type: String,required: true },
              toprice: { type: Number,required: true },
            },
          
    ]; 
    
    @IsNumber()
    mquant: number; 
    
    @IsBoolean()
    combo: boolean; 
    
}