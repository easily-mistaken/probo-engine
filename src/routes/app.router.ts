import express from "express";
import { createSymbol, createUser } from "../controllers/create";
import { getInrBalanceByUserId, getInrBalances, getStockBalances, onRamp } from "../controllers/balance";
import { buyOrder, getOrderBook, sellOrder } from "../controllers/orders";

const router = express.Router();

// Create user and Symbol
router.post("/user/create/:userId", createUser);
router.post("/symbol/create/:stockSymbol", createSymbol);
// Get Info
router.get("/balance/inr", getInrBalances);
router.get("/balance/inr/:userId", getInrBalanceByUserId);
router.get("/balance/stock", getStockBalances);
router.get("/balance/stock/:userId", getStockBalances);
router.post("/onramp/inr", onRamp);
// Orders
router.get("/orderbook", getOrderBook);
router.post("/order/buy", buyOrder);
router.post("/order/sell", sellOrder);
// router.get("/orderbook/:stockSymbol", viewOrders);

// Minting
router.post("/trade/mint", mintToken);
export default router;