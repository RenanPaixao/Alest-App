import styled from 'styled-components';

const CardStyle = styled.div`
	width: 14rem;
	height: 20rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem 1rem 1rem;

	background: rgb(142, 45, 226);
	background: linear-gradient(180deg, rgba(142, 45, 226, 0.4292892156862745) 5%, rgba(74, 0, 224, 1) 100%);
	border-radius: 8px;

	img {
		width: 70%;
		height: 50%;

		margin-top: 1rem;

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
	footer {
		width: 100%;
		height: 2.9rem;

		display: flex;
		align-items: flex-end;
		justify-self: flex-start;
		margin-top: auto;

		background-color: var(--white);

		:last-child div {
			border-left: solid 2px #fff;
		}
		div {
			height: min-content;

			margin: 0;
			padding: 0.5rem;

			border-radius: 0 0 8px 8px;
			background: var(--purple);
			background: var(--gradient);
			img {
				margin: 0;
				width: 25px;
				filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
			}
			:hover {
				transform: scale(1.1);
				cursor: pointer;
				border-right: solid 2px #fff;

				:last-child img {
					transform: scale(1.2);
					filter: invert(10%) sepia(94%) saturate(2966%) hue-rotate(354deg) brightness(89%) contrast(118%);
				}
				:first-child img {
					transform: scale(1.2);
					filter: invert(55%) sepia(94%) saturate(398%) hue-rotate(82deg) brightness(96%) contrast(87%);
				}
			}
		}
	}

	@media (max-width: 675px) {
		width: 11rem;
		height: 17rem;

		margin: 1rem;
	}
`;

export default CardStyle;
