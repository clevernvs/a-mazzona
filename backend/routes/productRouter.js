import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../database/data';
import Product from '../models/Product';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {

  const products = await Product.find({});
  res.send(products);

}));

productRouter.get('/seed', expressAsyncHandler(async (req, res) => {
  // await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ products: createdProducts });

}));

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {

  const products = await Product.findById(req.params.id);
  if (products) {
    res.send(products);
  } else {
    res.status(404).send({ message: 'Produto não encontrado.' });
  }

}));

export default productRouter;