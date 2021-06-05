import React, { useState, useEffect } from 'react';
import WrapperCards from './style';
import Card from '../Card/index.js';
import axios from 'axios';
import Search from '../Search';

function Products() {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		let isMounted = true;
		// put the port that you using here
		axios.get(`http://localhost:404/products`).then((res) => {
			if (isMounted) {
				setCards(res.data);
			}
		});
		return () => {
			isMounted = false;
		};
	}, [cards]);

	return (
		<>
			<Search />
			<WrapperCards>
				{cards === false || cards.length === 0 ? (
					<h1>Não temos produtos ou você não está conectado a internet</h1>
				) : (
					cards.map((props) => {
						return (
							<Card
								id={props.id}
								key={props.id}
								title={props.title}
								price={props.price}
								image={props.image}
							/>
						);
					})
				)}
			</WrapperCards>
		</>
	);
}

export default Products;
