carregaDados();
var refCursos = {
	ref: firebase.database().ref('Cursos'),
	setOrdem: firebase.database().ref('Cursos').push(),
};

function cria(um, dois, tres) {
	const div = document.createElement('ul');
	const node1 = document.createTextNode(um + '|-----   ----   |');
	const node2 = document.createTextNode(dois + '|-----   ----   |');
	const node3 = document.createTextNode(tres + '|-----|   ----   |');

	div.appendChild(node1);
	div.appendChild(node2);
	div.appendChild(node3);
	document.getElementsByTagName('body')[0].appendChild(div);
}

function setDados(title, price, urlImage) {
	const dados = {
		title,
		price,
		urlImage,
	};

	// refCursos
	// 	.child(title)
	// 	.set(dados)
	// 	.then(() => {
	// 		cria(title, price, urlImage);
	// 	});
	refCursos.ref
		.child(title)
		.set(dados)
		.then(() => {
			cria(title, price, urlImage);
		});

	refCursos.setOrdem.set(dados);
}

function carregaDados() {
	document.addEventListener('DOMContentLoaded', () => {
		refCursos.ref.once('value').then((snapshot) => {
			console.dir(snapshot);
			snapshot.forEach((snap) => {
				cria(snap.val()?.title, snap.val()?.price, snap.val()?.urlImage);
			});
		});
	});
}
