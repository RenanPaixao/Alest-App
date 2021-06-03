import styled from 'styled-components';

const CardStyle = styled.div`
	width: 12rem;
	height: 18rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem 1rem 1rem;

	background-color: var(--gray);
	border-radius: 5px;

	input {
		background-color: #000;
		width: 5rem;
	}
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

export default CardStyle;
