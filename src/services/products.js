import createHttpError from 'http-errors';
import { Product } from '../db/models/products.js';

export const getProducts = async () => {
  const products = await Product.find();

  return products;
};

export const getProductId = async (productId) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  return product;
};

export const createProduct = async (payload) => {
  const product = await Product.create(payload);

  return product;
};

export const updateProduct = async (productId, payload) => {
  const product = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });

  return product;
};

export const deleteProductById = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
};
