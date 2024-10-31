import { Request, Response } from "express";
import { INR_BALANCES, STOCK_BALANCES } from "../config/global";
import { ON_RAMP_REQUEST } from "../interfaces";

export const getInrBalance = (req: Request, res: Response) => {
    const userId = req.params.userId;
    const balance = INR_BALANCES[userId].balance;
    res.send({ data: { balance }});
};

export const getStockBalance = (req: Request, res: Response) => {
    const userId: string = req.params.userId;

    const stockArray = STOCK_BALANCES[userId];
    const stockArrayKeys = Object.keys(stockArray);
    const stockArrayValues = Object.values(stockArray);

    const balance = [];
    let yesStocks = 0;
    let noStocks = 0;
    
    for (let i = 0; i < stockArrayKeys.length; i++) {
        const key = stockArrayKeys[i];
        const value = {
            yes: stockArrayValues[i].yes?.quantity,
            no: stockArrayValues[i].no?.quantity,
        };
        balance.push({ [key]: value });

        yesStocks += stockArrayValues[i].yes?.quantity || 0;
        noStocks += stockArrayValues[i].no?.quantity || 0;
    }

    res.send({ 
        data: { totalBalance: { yes: yesStocks, no: noStocks }, balance }
    });
};

export const onRamp = (req: Request, res: Response) => {
    const { userId, amount }: ON_RAMP_REQUEST = req.body;
    INR_BALANCES[userId].balance += amount;
    const UpdatedBalance = INR_BALANCES[userId].balance;
    res.send({data: {message: "Success", UpdatedBalance}});
};