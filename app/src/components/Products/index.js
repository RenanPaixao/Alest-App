import { React, useState, useEffect } from 'react';
import WrapperCards from './style';
import Card from '../Card/index.js';
import axios from 'axios';

function Products() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		let isMounted = true;
		axios.get('http://localhost:404/products').then((res) => {
			if (isMounted) {
				setCards(res.data);
			}
		});
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<WrapperCards>
			{cards === false || cards.length === 0 ? (
				<h1>Não temos produtos ou você não está conectado a internet</h1>
			) : (
				cards.map((props) => {
					return <Card key={props.image.charCodeAt(0)} title={props.title} price={props.price} />;
				})
			)}
		</WrapperCards>
	);
}

export default Products;

// <Card>
// 		<img src={Teste} />
// 	<div>
// 		<p>{card?.title}</p>
//		<p>{card.price}</p>
// 	</div>
//</Card>
// cards.map((card) => {
// 	<Card>
// 		<img src={Teste} />
// 		<div>
// 			<p>{card?.title}</p>
// 			<p>{card.price}</p>
// 		</div>
// 	</Card>;
// })
