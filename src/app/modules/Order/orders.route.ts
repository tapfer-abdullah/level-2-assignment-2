import { Router } from 'express';
import { orderController } from './orders.controller';

const router = Router();

router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);

export { router as orderRouter };
