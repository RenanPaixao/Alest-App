import express from 'express';
import { productsList, addProduct, productUpdate, productDelete } from '../../services/products/productsServices.js';

const productsRoutes = express.Router();

productsRoutes.get('/products', async (req, res) => {
	res.send(await productsList());
});

productsRoutes.post('/add', (req, res) => {
	const body = req.body;
	if (!body) {
		return res.status(400).end();
	}

	addProduct(body.id, body.title, body.price, body.image);

	res.send('Success');
});

productsRoutes.post('/products/update/:id', async (req, res) => {
	const body = req.body;

	try {
		if (req.body) {
			const verify = await productUpdate(req.params.id, body?.title, body?.price, body?.image);
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

productsRoutes.delete('/delete/:id', async (req, res) => {
	const verify = await productDelete(req.params.id);
	if (verify === true) {
		return res.status(200).send('sucess');
	} else if (verify === false) {
		return res.status(400).send('Product not Found');
	}
	return res.status(400).send(verify);
});
export default productsRoutes;
