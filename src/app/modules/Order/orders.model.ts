import mongoose, { model } from "mongoose";
import { TOrder } from "./orders.interface";

export const orderSchema = new mongoose.Schema<TOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const orderModel = model<TOrder>("Orders", orderSchema);

export { orderModel };
