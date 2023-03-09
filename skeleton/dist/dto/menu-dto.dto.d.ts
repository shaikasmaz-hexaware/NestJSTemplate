export declare class menuDto {
    mname: string;
    mImage: string;
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
