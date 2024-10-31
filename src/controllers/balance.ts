import { Request, Response } from "express";
import { INR_BALANCES, STOCK_BALANCES } from "../config/global";
import { ON_RAMP_REQUEST } from "../interfaces/requestModels";

export const getInrBalances = (req: Request, res: Response) => {
    res.send({ data: INR_BALANCES});
};

// Get INR Balance by userId
export const getInrBalanceByUserId = (req: Request, res: Response) => {
    const userId = req.params.userId;

    const userExists = INR_BALANCES[userId];
    if(!userExists) {
        res.send({ error: `User with ID ${userId} does not exist`})
    }

    const balance = INR_BALANCES[userId].balance;
    res.send({ data: { balance }});
};

export const getStockBalances = (req: Request, res: Response) => {
    const userId: string = req.params.userId;

    const userExists = INR_BALANCES[userId];
    const stocksExists = STOCK_BALANCES[userId]

    if (!userExists) {
        res.send({ error: `User with Id ${userId} does not exist` });
        return;
      }
    if (!stocksExists) {
        res.send({ message: `No stocks for user with userId ${userId}` });
        return;
    }
    // const stockArray = STOCK_BALANCES[userId];
    // const stockArrayKeys = Object.keys(stockArray);
    // const stockArrayValues = Object.values(stockArray);

    // const balance = [];
    // let yesStocks = 0;
    // let noStocks = 0;
    
    // for (let i = 0; i < stockArrayKeys.length; i++) {
    //     const key = stockArrayKeys[i];
    //     const value = {
    //         yes: stockArrayValues[i].yes?.quantity,
    //         no: stockArrayValues[i].no?.quantity,
    //     };
    //     balance.push({ [key]: value });

    //     yesStocks += stockArrayValues[i].yes?.quantity || 0;
    //     noStocks += stockArrayValues[i].no?.quantity || 0;
    // }

    res.send({ data: STOCK_BALANCES[userId] });
};

export const onRamp = (req: Request, res: Response) => {
    const { userId, amount }: ON_RAMP_REQUEST = req.body;
    
    INR_BALANCES[userId].balance += amount;
    const UpdatedBalance = INR_BALANCES[userId].balance;
    res.send({data: {message: "Success", UpdatedBalance}});
};