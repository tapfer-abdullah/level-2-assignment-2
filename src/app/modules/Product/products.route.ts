import { Router } from 'express';
import { productController } from './products.controller';

const router = Router();

// get and search
router.get('/', productController.getAllProducts);
router.post('/', productController.createNewProduct);
router.get('/:productId', productController.getProductsById);
router.put('/:productId', productController.updateProductById);
router.delete('/:productId', productController.deleteProductsById);

// Add other product-related routes here

export { router as productRoute };
