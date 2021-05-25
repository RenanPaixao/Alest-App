import { Fragment } from 'react';
import GlobalStyle from './Assets/globalStyle.js';
import Navbar from './Components/Navbar/index.js';

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<div className="App">
				<Navbar />
			</div>
		</Fragment>
	);
}

export default App;
