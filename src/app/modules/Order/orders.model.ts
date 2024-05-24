import mongoose, { model } from 'mongoose';
import { TOrder } from './orders.interface';

export const orderSchema = new mongoose.Schema<TOrder>({
  email: {
    type: String,
    required: [true, 'Email is necessary to identify customer'],
  },
  productId: {
    type: String,
    required: [true, 'Email is necessary to identify product'],
  },
  price: {
    type: Number,
    required: [true, 'Price is require for order'],
    min: [1, 'Order price must be at least 1'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is require for order'],
    min: [1, 'Order quantity must be at least 1'],
  },
});

const orderModel = model<TOrder>('Orders', orderSchema);

export { orderModel };
