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

export async function addProduct(title, price, image) {
	try {
		let send = { title: title, price: price, image: image };
		await ref.add(send);
	} catch (err) {
		console.log(err);
	}
}

export async function productSearch(title) {
	const snapshot = await ref.get();
	if (snapshot.empty === true) {
		return false;
	} else {
		const products = [];
		snapshot.docs.forEach((snap) => {
			const verify = snap.data();

			if (verify.title.includes(title)) {
				products.push(snap.data());
			}
		});
		if (products.length) {
			return products;
		} else {
			return 'produto não encontrado';
		}
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
