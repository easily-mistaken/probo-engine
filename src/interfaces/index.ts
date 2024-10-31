export interface INR_BALANCES_TYPE {
    [userId: string]: {
      balance: number;
      locked: number;
    };
  }

export interface STOCK_BALANCES_TYPE {
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

export interface ORDERBOOK_TYPE{
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
