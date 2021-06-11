import express from 'express';
import cors from 'cors';
import productsRoute from '../routes/products/productsRoute.js';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', productsRoute);

export default app;
