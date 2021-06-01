import express from 'express';
import rootRoute from '../routes/rootRoute.js';
import productsRoute from '../routes/products/productsRoute.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', rootRoute);
app.use('/', productsRoute);

export default app;
