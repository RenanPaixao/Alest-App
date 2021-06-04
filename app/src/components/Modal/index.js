import React from 'react';
import { ModalStyle, ButtonCancel, OverlayModal } from './style.js';
import ReactDOM from 'react-dom';

const portal = document.getElementById('portal');
function Modal(props) {
	if (!props.isOpen) {
		return null;
	}
	return ReactDOM.createPortal(
		<OverlayModal>
			<ModalStyle>
				{props.children}
				<ButtonCancel onClick={props.closeModal}>Cancelar</ButtonCancel>
			</ModalStyle>
		</OverlayModal>,
		portal
	);
}

export default Modal;
