import { Request, Response } from "express";
import { productService } from "./products.service";

const createNewProduct = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const result = await productService.addNewProductInBD(data);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to add product!",
      error: error.message,
    });
  }
};

// get and search
const getAllProducts = async (req: Request, res: Response) => {
  const { searchTerm } = req.query;

  if (searchTerm) {
    try {
      const result = await productService.searchProducts(searchTerm as string);

      if (result?.length !== 0) {
        return res.status(200).json({
          success: true,
          message: `Products matching search term '${searchTerm}' fetched successfully!`,
          data: result,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: `No matching product found for term '${searchTerm}'!`,
        });
      }
    } catch (error: any) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: `No matching product found for term '${searchTerm}'!`,
        error: error.message,
      });
    }
  }

  try {
    const result = await productService.getAllProducts();

    if (result?.length !== 0) {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: `No product found!`,
      });
    }
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch products!",
      error: error.message,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updatedData = req.body;
  try {
    const result = await productService.updateProductsById(productId, updatedData);

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to updated product!",
      error: error.message,
    });
  }
};

const getProductsById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await productService.getProductsById(productId);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: `No product found for this id: ${productId}!`,
      });
    }
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch product!",
      error: error.message,
    });
  }
};

const deleteProductsById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    await productService.deleteProductsById(productId);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to delete product!",
      error: error.message,
    });
  }
};

export const productController = {
  createNewProduct,
  getAllProducts,
  getProductsById,
  updateProductById,
  deleteProductsById,
};
