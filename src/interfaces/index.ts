export interface INR_BALANCE {
    [userId: string]: {
      balance: number;
      locked: number;
    };
  }

export interface STOCK_BALANCE {
    [userId: string]: {
        [name: string]: {
        yes?: {
            quantity: number;
            locked: number;
        };
        no?: {
            quantity: number;
            locked: number;
        };
        };
    };
}

export interface ORDERBOOKS{
    [name:string]:{
        "yes":{
            [price:number]:{
                total:number,
                orders:{
                    user:string,
                    type:"buy" | "sell",
                    quantity:number
            }[]
            }
        };
        "no":{
            [price:number]:{
                total:number,
                orders:{
                    user:string,
                    type:"buy" | "sell",
                    quantity:number
            }[]
            }
        }
    }
}

export interface ON_RAMP_REQUEST {
    userId: string;
    amount: number;
}