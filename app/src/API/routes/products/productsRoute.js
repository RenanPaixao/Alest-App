import express from 'express';
import { productsList } from '../../services/products/productsServices.js';

const productsRoutes = express.Router();

productsRoutes.get('/products', async (req, res) => {
	res.send(await productsList());
});

export default productsRoutes;
