import { Fragment, useState } from 'react';
import GlobalStyle from './Assets/globalStyle.js';
import Navbar from './Components/Navbar/index.js';
import Card from './Components/Card/index.js';
import Container from './Components/Card/containerCards';

function App() {
	const [cardState, setCardState] = useState(true);
	const cards = [];
	cards.push({ nickname: 'NodeJS', price: 200, cents: 50 });
	// function addCard() {
	// 	let nickname = 'nickname';
	// 	let price = 'price';
	// 	let cents = 'cents';
	// 	cards.push({ nickname: nickname, price: price, cents: cents });
	// 	// setCardState(!cardState);
	// }

	function putInContainer() {
		return cards.map((card) => <Card nickname={card.nickname} price={card.price} cents={card.cents} />);
	}
	return (
		<Fragment>
			<GlobalStyle />
			<div className="App">
				<Navbar />
				<Container cards={putInContainer()} />
			</div>
		</Fragment>
	);
}

export default App;
