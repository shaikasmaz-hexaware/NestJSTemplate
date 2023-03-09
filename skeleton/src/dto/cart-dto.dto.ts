import { IsString, IsNotEmpty, MinLength, MaxLength, IsDate, IsNumber } from 'class-validator';
export class cartDto {
    
    menuid: string; 
    
    cartitems: string; 
    
    @IsNumber()
    ctotal: number; 
    
    discval: number; 
    
    coupval: number; 
    
    coupcode: string; 
    
}