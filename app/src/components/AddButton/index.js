import React, { useState } from 'react';
import AddButtonStyle from './style.js';
import Modal from '../Modal/index.js';

function AddButton(props) {
	const [openModal, setOpenModal] = useState(null);

	return (
		<>
			<AddButtonStyle onClick={() => setOpenModal(true)}>Adicionar</AddButtonStyle>
			{Boolean(openModal) && (
				<Modal
					isAdd
					isOpen={Boolean(openModal)}
					closeModal={() => setOpenModal(null)}
					cards={props.cards}
					setCards={props.setCards}
					list={props.list}
				></Modal>
			)}
		</>
	);
}

export default AddButton;
