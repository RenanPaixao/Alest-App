import express from 'express';
import { productsList, addProduct, productSearch, productUpdate } from '../../services/products/productsServices.js';

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

productsRoutes.get('/products/:id', async (req, res) => {
	res.send(await productSearch(req.params.id));
});

productsRoutes.post('/products/update/:id', async (req, res) => {
	const body = req.body;

	try {
		if (req.body) {
			const verify = await productUpdate(req.params.id, body?.id.title, body.id.price, body.id.image);
			if (verify === true) {
				return res.status(200).send('Sucess');
			} else {
				throw new Error('failed to update');
			}
		}
	} catch (err) {
		return res.status(400).send(err.message);
	}
});

export default productsRoutes;
