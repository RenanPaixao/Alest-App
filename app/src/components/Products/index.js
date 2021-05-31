import React from 'react';
import { Card, WrapperCards } from './style';
import Teste from '../../assets/images/teste.jpg';

function Products() {
	return (
		<>
			<WrapperCards>
				<Card>
					<img src={Teste} />
					<div>
						<p>NodeJS</p>
						<p>R$ 200,00</p>
					</div>
				</Card>
				<Card>
					<img src={Teste} />
					<div>
						<p>React js</p>
						<p>R$ 599,99</p>
					</div>
				</Card>
				<Card>
					<img src={Teste} />
					<div>
						<p>Firebase</p>
						<p>R$ 99,99</p>
					</div>
				</Card>
				<Card>
					<img src={Teste} />
					<div>
						<p>Redux</p>
						<p>R$ 300,99</p>
					</div>
				</Card>
				<Card>
					<img src={Teste} />
					<div>
						<p>Clean Code</p>
						<p>R$ 99,99</p>
					</div>
				</Card>
			</WrapperCards>
		</>
	);
}

export default Products;
