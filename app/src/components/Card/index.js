import React from 'react';
import CardStyle from './style.js';
import Teste from '../../assets/images/teste.jpg';

function Card(props) {
	return (
		<CardStyle>
			<img src={props.image} alt={`Imagem sobre ${props.title}`} />
			<div>
				<p>{props.title}</p>
				<p>{props.price}</p>
			</div>
		</CardStyle>
	);
}

export default Card;
