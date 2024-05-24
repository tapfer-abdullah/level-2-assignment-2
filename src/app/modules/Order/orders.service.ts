import { TOrder } from "./orders.interface";
import { orderModel } from "./orders.model";

const createOrder = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

const getAllOrders = async () => {
  const result = await orderModel.find();
  return result;
};

const getOrderByEmail = async (email: String) => {
  const result = await orderModel.findOne({ email });
  return result;
};

export const orderService = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
