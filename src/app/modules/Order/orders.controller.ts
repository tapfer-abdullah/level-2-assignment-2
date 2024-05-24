import { Request, Response } from "express";
import { orderService } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;

  try {
    const result = await orderService.createOrder(orderData);
    res.json(result);
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to create order!",
      error: error.message,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const { email } = req.query;

  if (email) {
    //fetch order by email
    try {
      const result = await orderService.getOrderByEmail(email as string);

      if (result) {
        return res.status(200).json({
          success: true,
          message: "Orders fetched successfully for user email!",
          data: result,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Order not found",
        });
      }
    } catch (error: any) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Unable to fetch orders user email!",
        error: error.message,
      });
    }
  } else {
    //fetch all orders
    try {
      const result = await orderService.getAllOrders();

      if (result) {
        res.status(200).json({
          success: true,
          message: "Orders fetched successfully!",
          data: result,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Order not found",
        });
      }
    } catch (error: any) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: "Unable to fetch orders!",
        error: error.message,
      });
    }
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
};
