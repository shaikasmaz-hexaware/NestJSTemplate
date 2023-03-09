import { Document } from 'mongoose';
export declare type cartDocument = cart & Document;
export declare class cart {
    menuid: string;
    cartitems: string;
    ctotal: number;
    discval: number;
    coupval: number;
    coupcode: string;
}
export declare const cartSchema: import("mongoose").Schema<Document<cart, any, any>, import("mongoose").Model<Document<cart, any, any>, any, any>, undefined, {}>;
