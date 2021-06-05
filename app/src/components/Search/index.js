import React from 'react';
import SearchStyle from './style.js';

function Search() {
	return (
		<SearchStyle>
			<input id="search" type="text" placeholder="Insira o nome do produto"></input>
			<input id="buttonSearch" type="submit" value="Procurar"></input>
		</SearchStyle>
	);
}
export default Search;
