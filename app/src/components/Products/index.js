import React, { useState, useEffect } from 'react';
import WrapperCards from './style';
import Card from '../Card/index.js';
import axios from 'axios';
import Search from '../Search';
import AddButton from '../AddButton';

function Products() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		list();
	}, []);
	function list() {
		// put the port that you using here
		axios.get(`http://localhost:404/products`).then((res) => {
			setCards(res.data);
		});
	}

	return (
		<>
			<Search cards={cards} setCards={setCards} list={list} />
			<AddButton />
			<WrapperCards>
				{cards === false || cards.length === 0 ? (
					<h1>Não temos produtos</h1>
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
