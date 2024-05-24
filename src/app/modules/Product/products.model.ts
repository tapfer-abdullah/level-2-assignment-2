import mongoose, { model } from "mongoose";
import { TProduct } from "./products.interface";

const ProductSchema = new mongoose.Schema<TProduct>({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: Number,
  category: {
    type: String,
    trim: true,
  },
  tags: [String],
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
    quantity: Number,
    inStock: Boolean,
  },
});

const productModel = model<TProduct>("Products", ProductSchema);

export { productModel };
