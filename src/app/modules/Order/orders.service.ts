import { TOrder } from "./orders.interface";
import { orderModel } from "./orders.model";

const createOrder = async (orderData: TOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

export const orderService = {
  createOrder,
};
