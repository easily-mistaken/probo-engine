import { Request, Response } from "express";
import { INR_BALANCES, ORDERBOOK } from "../config/global";
import { ORDER_REQUEST } from "../interfaces/requestModels";

// Buy Order
export const buyOrder = (req: Request, res: Response) => {
    console.log("Buy order");
};

// Sell Order
export const sellOrder = (req: Request, res: Response) => {
    const {userId, stockSymbol} = req.body as ORDER_REQUEST;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
    const stockType = req.body.stockType as "yes" | "no";
    
    const userExists = INR_BALANCES[userId];
    const symbolExists = ORDERBOOK[stockSymbol];
    
    if (!userExists) {
        res.send({ error: `User with user Id ${userId} does not exist` });
        return;
      }
      if (!symbolExists) {
        res.send({ error: `Stock with stockSymbol ${stockSymbol} does not exist` });
        return;
      }
    console.log("Sell order");
};

//Get order book
export const getOrderBook = (req: Request, res: Response) => {
    res.send({ data: ORDERBOOK });
};