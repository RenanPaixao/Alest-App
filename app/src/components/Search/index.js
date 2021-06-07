import React from 'react';
import SearchStyle from './style.js';

function Search({ cards, setCards, list }) {
	return (
		<SearchStyle>
			<input
				id="search"
				type="text"
				placeholder="Insira o nome do produto"
				onChange={() => {
					if (document.getElementById('search').value === '') {
						list();
					}
				}}
			></input>
			<input
				id="buttonSearch"
				type="submit"
				value="Procurar"
				onClick={() => {
					const value = document.getElementById('search').value;
					let newCards;

					newCards = cards.filter((card) => {
						if (card.title.toLowerCase() === value.toLowerCase()) {
							return card;
						}
					});

					if (newCards.length > 0) {
						setCards(newCards);
					} else {
						alert('produto não encontrado!');
					}
				}}
			></input>
		</SearchStyle>
	);
}
export default Search;
