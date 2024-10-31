import { Request, Response } from "express";
import { ORDERBOOK } from "../config/global";

export const buyOrder = (req: Request, res: Response) => {
    console.log("Buy order");
};

export const sellOrder = (req: Request, res: Response) => {
    console.log("Sell order");
};

export const getOrderBook = (req: Request, res: Response) => {
    res.send({ data: ORDERBOOK });
};