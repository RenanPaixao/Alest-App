import styled from 'styled-components';
export const ContainerCards = styled.div`
	width: 80vw;
	height: 100vh;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 2rem auto 0;
`;
export const CardStyled = styled.div`
	width: 200px;
	height: 300px;

	display: flex;
	flex-direction: column;
	margin: 0 2rem 3rem 0;

	background-color: var(--color-green);
	color: var(--color-white);
	border-radius: 8px;
	overflow: hidden;
	border: 3px solid var(--color-lightGreen);
	box-shadow: 4px 4px 2px #00000069;

	&:hover {
		transform: scale(1.06);
		cursor: pointer;
	}

	h2 {
		font-size: 1.6rem;

		margin: 1rem 0 0 1rem;
	}
	p {
		align-self: center;
		margin: 6.8rem 0 6.4rem;
	}
	h3 {
		font-size: 1.4rem;

		margin: 0 0 60px 1.6rem;
	}
`;
