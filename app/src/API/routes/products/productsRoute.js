import express from 'express';
import { productsList, addProduct } from '../../services/products/productsServices.js';

const productsRoutes = express.Router();

productsRoutes.get('/products', async (req, res) => {
	res.send(await productsList());
});

productsRoutes.post('/add', (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).end();
	}

	addProduct(body.id.title, body.id.price, body.id.urlImage);

	res.send('Success');
});

export default productsRoutes;
