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
