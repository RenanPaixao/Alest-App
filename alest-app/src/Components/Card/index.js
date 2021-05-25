import { CardStyled } from './style.js';

function Card({ nickname, image, price, cents }) {
	if (nickname === '') {
		alert('O nome não pode estar vazio');
		return false;
	}
	if (price === '') {
		alert('O nome não pode estar vazio');
		return false;
	}
	return (
		<CardStyled>
			<h2>{nickname}</h2>
			{image ? <img src={image}></img> : <p>NOT FOUND</p>}
			<h3>
				R$ {price},{cents ? cents : '00'}
			</h3>
		</CardStyled>
	);
}

export default Card;
