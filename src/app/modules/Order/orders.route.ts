import { Router } from "express";
import { orderController } from "./orders.controller";

const router = Router();

router.post("/", orderController.createOrder);

export { router as orderRouter };
