import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { listOrders, placeOrder, userOrders, verifyOrder } from '../controllers/orderController.js';

const oerderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.get('/list',listOrders)

export default orderRouter;