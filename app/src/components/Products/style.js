import styled from 'styled-components';

export const Card = styled.div`
	width: 12rem;
	height: 18rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem 1rem 1rem;

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
	:hover {
		transform: scale(1.1);
		cursor: pointer;
		background-color: var(--gray-hover);
	}
	@media (max-width: 675px) {
		width: 11rem;
		height: 17rem;

		margin: 1rem;
	}
`;
export const WrapperCards = styled.div`
	max-width: 60%;
	justify-content: center;

	display: flex;
	flex-wrap: wrap;
	margin: 2rem auto;

	background-color: var(--white);

	@media (max-width: 1000px) {
		max-width: 90%;
	}
	@media (max-width: 850px) {
		max-width: 80%;
	}
	@media (max-width: 635px) {
		max-width: 100%;
	}
`;
