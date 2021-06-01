import express from 'express';

const rootRoute = express.Router();

rootRoute.get('/', (req, res) => {
	res.send('raiz');
});

export default rootRoute;
