import { TProduct } from '../Product/products.interface';
import { productModel } from '../Product/products.model';
import { TOrder } from './orders.interface';
import { orderModel } from './orders.model';

const createOrder = async (orderData: TOrder) => {
  // validate order before order
  const { productId } = orderData;

  const response = (await productModel
    .findById(productId)
    .select('inventory')
    .lean()) as TProduct | null;

  //checking for availability
  if (response && response.inventory.inStock) {
    if (response.inventory.quantity < orderData.quantity) {
      return {
        success: false,
        message: 'Insufficient quantity available in inventory',
      };
    }
    // if stock quantity and buy quantity are same then make the stock false and quantity = 0
    else if (response.inventory.quantity === orderData.quantity) {
      await productModel.findByIdAndUpdate(
        productId,
        { $set: { 'inventory.inStock': false, 'inventory.quantity': 0 } },
        { new: true },
      );

      const result = await orderModel.create(orderData);
      return {
        success: true,
        message: 'Order created successfully!',
        data: result,
      };
    }
    //everything is okay for creating an order
    else {
      await productModel.findByIdAndUpdate(
        productId,
        {
          $set: {
            'inventory.quantity':
              response.inventory.quantity - orderData.quantity,
          },
        },
        { new: true },
      );
      const result = await orderModel.create(orderData);
      return {
        success: true,
        message: 'Order created successfully!',
        data: result,
      };
    }
  }
  //product is out of stock
  else {
    return {
      success: false,
      message: 'Out of stock. Unable to create order!',
    };
  }
};

const getAllOrders = async () => {
  const result = await orderModel.find();
  return result;
};

const getOrderByEmail = async (email: string) => {
  const result = await orderModel.findOne({ email });
  return result;
};

export const orderService = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
