import mongoose, { model } from "mongoose";
import { TProduct } from "./products.interface";

const ProductSchema = new mongoose.Schema<TProduct>({
  name: {
    type: String,
    trim: true,
    required: [true, "Product name is required"],
    maxlength: [30, "Name can not be more than 30 character"],
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [1, "Price must be more than 0"],
  },
  category: {
    type: String,
    trim: true,
    required: [true, "Product category is required"],
  },
  tags: {
    type: [String],
  },
  variants: [
    {
      type: {
        type: String,
        trim: true,
      },
      value: {
        type: String,
        trim: true,
      },
    },
  ],
  inventory: {
    quantity: {
      type: Number,
      required: [true, "Inventory quantity is required"],
    },
    inStock: {
      type: Boolean,
      required: [true, "Inventory stock status is required"],
    },
  },
});

const productModel = model<TProduct>("Products", ProductSchema);

export { productModel };
