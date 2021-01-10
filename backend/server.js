import express from 'express';
import mongoose from 'mongoose';
<<<<<<< HEAD
import productRouter from './routes/productRouter.js';
=======
import data from './database/data.js';
>>>>>>> master
import userRouter from './routes/userRouter.js';

const app = express();

// Conexão BD
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
<<<<<<< HEAD
=======
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not Found' });
  }
});

app.use('/api/users', userRouter);

app.get('/api/products', (req, res) => {
  res.send(data.products);
>>>>>>> master
});

app.get('/', (req, res) => {
  res.send('Servidor iniciado.');
});

<<<<<<< HEAD
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

=======
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

>>>>>>> master
const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Servidor alocado em http://localhost:${port}`);
});