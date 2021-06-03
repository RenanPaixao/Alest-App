import styled from 'styled-components';

const CardStyle = styled.div`
	width: 12rem;
	height: 18rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem 1rem 1rem;

	background: rgb(142, 45, 226);
	background: linear-gradient(180deg, rgba(142, 45, 226, 0.4292892156862745) 5%, rgba(74, 0, 224, 1) 100%);
	border-radius: 8px;

	input {
		background-color: #000;
		width: 5rem;
	}
	img {
		width: 70%;
		height: 50%;

		border-radius: 50%;
	}
	div {
		width: 100%;
		font-size: 13px;

		display: flex;
		justify-content: space-around;
		margin-top: 3rem;
	}

	span {
		height: 50%;
		font-weight: bold;
		font-size: 1.3rem;
		color: #fff;
	}
	p {
		color: var(--white);
		text-transform: capitalize;
		font-size: 1.2rem;
		text-overflow: clip;
	}
	:hover {
		transform: scale(1.1);
	}
	@media (max-width: 675px) {
		width: 11rem;
		height: 17rem;

		margin: 1rem;
	}
`;

export default CardStyle;
