import React, { useState } from 'react';
import CardStyle from './style.js';
import Update from '../../assets/images/update.svg';
import Delete from '../../assets/images/trash.svg';
import axios from 'axios';

function Card(props) {
	const [state, setstate] = useState(props.id);

	return (
		<CardStyle id={props.id}>
			<img src={props.image} alt={`Imagem sobre ${props.title}`} />
			<div>
				<p>{props.title}</p>

				<p>
					<span>R$ {props.price}</span>
				</p>
			</div>
			<footer>
				<div>
					<img src={Update} alt="Button update" />
				</div>
				<div
					onClick={() => {
						document.getElementById(`${state}`).style.display = 'none';
						// put the port that you using here
						axios.delete(`http://localhost:404/delete/${state}`);

						setstate(false);
					}}
				>
					<img src={Delete} alt="Button delete" />
				</div>
			</footer>
		</CardStyle>
	);
}

export default Card;
