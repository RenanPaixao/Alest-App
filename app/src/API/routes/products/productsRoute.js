import express from 'express';

const productsRoutes = express.Router();

productsRoutes.get('/products', (req, res) => {
	res.send('produtos');
});

export default productsRoutes;
