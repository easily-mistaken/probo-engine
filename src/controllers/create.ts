import { Request, Response } from "express";
import { INR_BALANCES } from "../config/global";

export const createUser = (req:  Request, res: Response) => {
    const userId = req.params.userId;
    INR_BALANCES[userId] = { balance: 0, locked: 0 };
    res.send(`${userId} created`);
};

export const createSymbol = (req: Request, res: Response) => {
    const stockSymbol = req.params.stockSymbol;
    res.send(`${stockSymbol} symbol created`)
};