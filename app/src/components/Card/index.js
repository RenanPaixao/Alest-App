import React, { useState } from 'react';
import CardStyle from './style.js';
import Modal from '../Modal/index.js';
import Update from '../../assets/images/update.svg';
import Delete from '../../assets/images/trash.svg';
import axios from 'axios';

function Card(props) {
	const [state, setstate] = useState(props); //melhor criar outro state e passar a prop pra ele

	return (
		<>
			<CardStyle id={props.id}>
				<img src={props.image} alt={`Imagem sobre ${props.title}`} />
				<div>
					<p>{props.title}</p>

					<p>
						<span>R$ {props.price}</span>
					</p>
				</div>
				<footer>
					<div onClick={props.onClickUpdate}>
						<img src={Update} alt="Button update" />
					</div>
					<div
						onClick={async () => {
							document.getElementById(`${state.id}`).style.display = 'none';

							// put the port that you using here
							await axios.delete(`http://localhost:404/delete/${state.id}`, {
								title: state.title,
								price: state.price,
								imagem: state.price,
							});

							setstate(false);
						}}
					>
						<img src={Delete} alt="Button delete" />
					</div>
				</footer>
			</CardStyle>
		</>
	);
}

export default Card;
