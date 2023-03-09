import { Document } from 'mongoose';
export declare type ordersDocument = orders & Document;
export declare class orders {
    cartid: string;
    odate: Date;
    cname: string;
    cstreet: string;
    cpostal: number;
    ccity: string;
    cphone: string;
}
export declare const ordersSchema: import("mongoose").Schema<Document<orders, any, any>, import("mongoose").Model<Document<orders, any, any>, any, any>, undefined, {}>;
