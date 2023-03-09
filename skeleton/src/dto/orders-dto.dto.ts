import { IsString, IsNotEmpty, MinLength, MaxLength, IsDate, IsNumberString } from 'class-validator';
export class ordersDto {
    @IsString()
    @IsNotEmpty()
    cartid: string; 
    
    @IsDate()
    odate: Date; 

    @IsString()
    @IsNotEmpty()
    cname: string; 
    
    @IsString()
    @IsNotEmpty()
    cstreet: string; 

    @MaxLength(6)
    @MinLength(5)
    cpostal: number; 
    
    @IsNotEmpty()
    @IsString()
    ccity: string; 
    
    @IsNumberString()
    @MaxLength(10)
    @MinLength(10)
    cphone: string; 
    
}