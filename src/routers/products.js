import { Router } from 'express';
import {
  getProductsController,
  getProductIdController,
  createProductController,
  updateProductController,
  deleteProductByIdController,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/products', getProductsController);

productsRouter.get('/products/:productId', getProductIdController);

productsRouter.post('/products', createProductController);

productsRouter.patch('/products/:productId', updateProductController);

productsRouter.delete('/products/:productId', deleteProductByIdController);

export default productsRouter;
