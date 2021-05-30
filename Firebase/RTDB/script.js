carregaDados();
var refCursos = firebase.database().ref('Cursos');

function cria(um, dois, tres, id) {
	const div = document.createElement('ul');
	const button = document.createElement('button');
	button.textContent = 'remove';
	button.setAttribute('id', 'btn' + id);
	button.addEventListener('click', () => {
		removePorId(id);
	});
	div.setAttribute('id', id);

	const node1 = document.createTextNode(um + '|-----   ----   |');
	const node2 = document.createTextNode(dois + '|-----   ----   |');
	const node3 = document.createTextNode(tres + '|-----|   ----   |');

	div.appendChild(node1);
	div.appendChild(node2);
	div.appendChild(node3);
	div.appendChild(button);
	document.getElementsByTagName('body')[0].appendChild(div);
}

function setDados() {
	const dados = {
		title: document.getElementById('inputNome').value,
		price: document.getElementById('inputPrice').value,
		urlImage: window.location.href,
	};

	// refCursos
	// 	.child(title)
	// 	.set(dados)
	// 	.then(() => {
	// 		cria(title, price, urlImage);
	// 	});
	// refCursos.ref
	// 	.child(title)
	// 	.set(dados)
	// 	.then(() => {
	// 		cria(title, price, urlImage);
	// 	});

	refCursos.push(dados).then((snapshot) => {
		cria(dados.title, dados.price, dados.urlImage, snapshot.key);
		carregaDados();
	});
}
function removePorId(id) {
	refCursos.child(id).remove();
	location.href = location.href;
}

function carregaDados() {
	document.addEventListener('DOMContentLoaded', () => {
		refCursos.ref.once('value').then((snapshot) => {
			snapshot.forEach((snap) => {
				cria(snap.val()?.title, snap.val()?.price, snap.val()?.urlImage, snap?.key);
				console.log(snap.key);
			});
		});
	});
}
