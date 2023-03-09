import { IsNotEmpty, IsNumber, IsNumberString, IsString, MaxLength, MinLength } from "class-validator";

export class restaurantDto {
    
    rid: string; 
    
    @IsString()
    @IsNotEmpty()
    rname: string; 

    @IsNumber()
    @MaxLength(6)
    @MinLength(5)
    rzip: number; 
    
    @IsString()
    @IsNotEmpty()
    raddress: string; 
    
    @IsNotEmpty()
    @IsString()
    rstate: string; 
    
    @IsString()
    @IsNotEmpty()
    rcity: string; 
    
    @IsNotEmpty()
    @IsNumberString()
    rphone: string; 
    
    @IsNotEmpty()
    @IsNumberString()
    kphone: string; 
    
}