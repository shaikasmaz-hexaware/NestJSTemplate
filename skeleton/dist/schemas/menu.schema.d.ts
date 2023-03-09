import { Document } from 'mongoose';
export declare type menuDocument = menu & Document;
export declare class menu {
    mImage: string;
    mname: string;
    mdesc: string;
    mprice: number;
    toppings: [
        {
            toname: {
                type: String;
                required: true;
            };
            toprice: {
                type: Number;
                required: true;
            };
        }
    ];
    mquant: number;
    combo: boolean;
}
export declare const menuSchema: import("mongoose").Schema<Document<menu, any, any>, import("mongoose").Model<Document<menu, any, any>, any, any>, undefined, {}>;
