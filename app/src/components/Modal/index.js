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
				{props.children}
				<InlineDiv>
					<button
						onClick={() => {
							const title = document.getElementById('inputTitle').value.trim();
							const price = document.getElementById('inputPrice').value.trim();
							const image = document.getElementById('inputImage').value.trim();

							if (title === '' && price === '' && image === '') {
								alert('Você precisa preencher ao menos um valor');
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
						Atualizar
					</button>
					<ButtonCancel onClick={props.closeModal}>Cancelar</ButtonCancel>
				</InlineDiv>
			</ModalStyle>
		</OverlayModal>,
		portal
	);
}

export default Modal;
