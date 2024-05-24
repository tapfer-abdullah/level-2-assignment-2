import { Request, Response } from "express";
import { orderService } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;

  try {
    const result = await orderService.createOrder(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to create order!",
      error: error.message,
    });
  }
};

export const orderController = {
  createOrder,
};
