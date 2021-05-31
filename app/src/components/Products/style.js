import styled from 'styled-components';

export const Card = styled.div`
	width: 12rem;
	height: 18rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem;

	background-color: var(--gray);
	border-radius: 5px;

	img {
		width: 70%;
		height: 40%;
	}
	div {
		width: 100%;
		font-size: 13px;

		display: flex;
		justify-content: space-around;
		margin-top: 3rem;
	}
`;
export const WrapperCards = styled.div`
	max-width: 60%;

	display: flex;
	flex-wrap: wrap;
	margin: 2rem auto;

	background-color: var(--white);
`;
