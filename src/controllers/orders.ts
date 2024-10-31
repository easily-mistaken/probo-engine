import { Request, Response } from "express";

export const buyOrder = (req: Request, res: Response) => {
    console.log("Buy order");
};

export const sellOrder = (req: Request, res: Response) => {
    console.log("Sell order");
};

export const getOrderBook = (req: Request, res: Response) => {
    console.log("View orders");
};