import { TProduct } from './products.interface';
import { productModel } from './products.model';

const addNewProductInBD = async (newProduct: TProduct) => {
  const result = await productModel.create(newProduct);
  return result;
};

const getAllProducts = async () => {
  const result = await productModel.find();
  return result;
};

const getProductsById = async (productId: string) => {
  const result = await productModel.findById(productId);
  return result;
};

const updateProductsById = async (productId: string, updatedData: TProduct) => {
  const result = await productModel.findByIdAndUpdate(productId, updatedData, {
    new: true,
  });
  return result;
};
const deleteProductsById = async (productId: string) => {
  const result = await productModel.deleteOne({ _id: productId });
  return result;
};

const searchProducts = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm as string, 'i');

  const filteredProducts = await productModel.find({
    // filtering on name, description, category and tags
    $or: [
      { name: regex },
      { description: regex },
      { category: regex },
      { tags: regex },
    ],
  });

  return filteredProducts;
};

export const productService = {
  addNewProductInBD,
  getAllProducts,
  getProductsById,
  updateProductsById,
  deleteProductsById,
  searchProducts,
};
