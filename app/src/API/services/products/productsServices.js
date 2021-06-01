import db from '../../data/DB.js';

const ref = db.collection('Cursos');

export async function productsList() {
	const snapshot = await ref.get();

	if (snapshot.empty === true) {
		return false;
	} else {
		const products = [];
		snapshot.docs.forEach((snap) => {
			products.push(snap.data());
		});
		return products;
	}
}

export async function addProduct(title, price, urlImage) {
	try {
		let send = { title: title, price: price, urlImage: urlImage };
		await ref.add(send);
	} catch (err) {
		console.log(err);
	}
}
