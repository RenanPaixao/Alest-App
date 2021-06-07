import React, { useState } from 'react';
import CardStyle from './style.js';
import Modal from '../Modal/index.js';
import Update from '../../assets/images/update.svg';
import Delete from '../../assets/images/trash.svg';
import axios from 'axios';

function Card(props) {
	const [state, setState] = useState(props);
	const [openModal, setOpenModal] = useState(null);

	return (
		<>
			<CardStyle id={props.id}>
				<img src={state.image} alt={`Imagem sobre ${state.title}`} />
				<div>
					<p>{state.title}</p>

					<p>
						<span>R$ {state.price}</span>
					</p>
				</div>
				<footer>
					<div onClick={() => setOpenModal(!openModal)}>
						<img src={Update} alt="Button update" />
					</div>
					<div
						onClick={async () => {
							document.getElementById(`${state.id}`).style.display = 'none';

							// put the port that you using here
							await axios.delete(`http://localhost:404/delete/${props.id}`, {
								title: state.title,
								price: state.price,
								imagem: state.price,
							});

							setState(false);
						}}
					>
						<img src={Delete} alt="Button delete" />
					</div>
				</footer>
			</CardStyle>
			{Boolean(openModal) && (
				<Modal
					isOpen={Boolean(openModal)}
					closeModal={() => setOpenModal(null)}
					state={state}
					setState={setState}
				>
					<h1>Atualizar</h1>
					<label htmlFor="inputTitle">Título</label>
					<input id="inputTitle" type="text" name="inputTitle" placeholder="Título"></input>
					<label htmlFor="inputPrice">Preço</label>
					<input id="inputPrice" type="number" name="inputPrice" placeholder="Preço"></input>
					<label htmlFor="inputImage">Url da Imagem</label>
					<input id="inputImage" type="text" name="inputImage" placeholder="Url da Imagem"></input>
					<p>**Nem toda imagem com url será válida. Indico as do site https://imgur.com/</p>
				</Modal>
			)}
		</>
	);
}

export default Card;
