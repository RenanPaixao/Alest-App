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
