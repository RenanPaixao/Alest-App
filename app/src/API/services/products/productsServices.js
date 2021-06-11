import db from '../../data/DB.js';

const ref = db.collection('Cursos');

export async function productsList() {
	const snapshot = await ref.get();

	if (snapshot.empty === true) {
		return false;
	} else {
		const products = [];
		snapshot.docs.forEach((snap) => {
			products.push(Object.assign({ id: snap.id }, snap.data()));
		});
		return products;
	}
}

export async function addProduct(id, title, price, image) {
	try {
		let send = { title: title, price: price, image: image };
		await ref.doc(id).set(send);
	} catch (err) {
		console.log(err);
	}
}

export async function productUpdate(id, title, price, image) {
	let erro = true;
	try {
		await ref.doc(id).update({ title: title, price: price, image: image });
	} catch (err) {
		erro = false;
	}
	return erro;
}

export async function productDelete(id) {
	const snapshot = await ref.get();
	let verify = false;

	try {
		if (snapshot.empty === true) {
			throw new Error('empty stock');
		} else {
			snapshot.docs.forEach((snap) => {
				if (snap.id == id) {
					ref.doc(id).delete();
					verify = true;
				}
			});
		}
	} catch (e) {
		return e.message;
	}
	return verify;
}
