import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { placeOrder } from '../controllers/orderController.js';

const oerderRouter = express.Router();

orderRouter.post('/place', authMiddleware, placeOrder);

export default orderRouter;