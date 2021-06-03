import React from 'react';
import CardStyle from './style.js';
import Update from '../../assets/images/update.svg';
import Delete from '../../assets/images/trash.svg';

function Card(props) {
	return (
		<CardStyle>
			<img src={props.image} alt={`Imagem sobre ${props.title}`} />
			<div>
				<p>{props.title}</p>

				<p>
					<span>R$ {props.price}</span>
				</p>
			</div>
			<footer>
				<div>
					<img src={Update} />
				</div>
				<div>
					<img src={Delete} />
				</div>
			</footer>
		</CardStyle>
	);
}

export default Card;
