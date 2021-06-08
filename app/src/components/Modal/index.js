import React from 'react';
import { ModalStyle, ButtonCancel, OverlayModal, InlineDiv } from './style.js';
import ReactDOM from 'react-dom';
import axios from 'axios';

const portal = document.getElementById('portal');
function Modal(props) {
	if (!props.isOpen) {
		return null;
	}
	return ReactDOM.createPortal(
		<OverlayModal>
			<ModalStyle>
				<h1>{props.isAdd ? 'Adicionar' : 'Atualizar'}</h1>
				<label htmlFor="inputTitle">Título</label>
				<input id="inputTitle" type="text" name="inputTitle" placeholder="Título"></input>
				<label htmlFor="inputPrice">Preço</label>
				<input id="inputPrice" type="number" name="inputPrice" placeholder="Preço"></input>
				<label htmlFor="inputImage">Url da Imagem</label>
				<input id="inputImage" type="text" name="inputImage" placeholder="Url da Imagem"></input>
				<p>**Nem toda imagem com url será válida. Indico as do site https://imgur.com/</p>

				<InlineDiv>
					<button
						onClick={() => {
							const title = document.getElementById('inputTitle').value.trim();
							const price = document.getElementById('inputPrice').value.trim();
							const image = document.getElementById('inputImage').value.trim();

							if (title === '' && price === '' && image === '') {
								props.isAdd
									? alert('Preencha todos os valores')
									: alert('Você precisa preencher ao menos um valor');
								return;
							}

							if (props.isAdd) {
								axios.post('http://localhost:404/add', {
									id: {
										title: title,
										price: price,
										image: image,
									},
								});

								props.setCards([
									...props.cards,
									{
										id: new Date().getTime(),
										title: title,
										price: price,
										image: image,
									},
								]);

								props.closeModal();
								return;
							}

							const arr = Object.entries({ title: title, price: price, image: image }).reduce(
								(a, [k, v]) => (v ? ((a[k] = v), a) : a),
								{}
							);
							const copy = Object.assign({}, props.state);
							const result = Object.assign(copy, arr);

							axios.post(`http://localhost:404/products/update/${props.state.id}`, {
								title: result.title,
								price: result.price,
								image: result.image,
							});
							props.setState({
								id: props.state.id,
								title: result.title,
								price: result.price,
								image: result.image,
							});
							props.closeModal();
						}}
					>
						{props.isAdd ? 'Adicionar' : 'Atualizar'}
					</button>
					<ButtonCancel onClick={props.closeModal}>Cancelar</ButtonCancel>
				</InlineDiv>
			</ModalStyle>
		</OverlayModal>,
		portal
	);
}

export default Modal;
