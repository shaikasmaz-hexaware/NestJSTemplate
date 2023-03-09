import { Document } from 'mongoose';
export declare type restaurantDocument = restaurant & Document;
export declare class restaurant {
    rid: string;
    rname: string;
    rzip: number;
    raddress: string;
    rstate: string;
    rcity: string;
    rphone: string;
    kphone: string;
}
export declare const restaurantSchema: import("mongoose").Schema<Document<restaurant, any, any>, import("mongoose").Model<Document<restaurant, any, any>, any, any>, undefined, {}>;
