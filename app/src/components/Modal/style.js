import styled from 'styled-components';

export const ModalStyle = styled.div`
	width: 22rem;
	height: 22rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 16vh auto 0;
	padding: 2rem;

	background-color: var(--white);
	border-radius: 4px;

	h1 {
		margin-bottom: 1rem;
	}
	label {
		align-self: flex-start;
		margin: 0.5rem 0;
	}

	input {
		width: 100%;

		:focus {
			outline-color: var(--purple);
		}
	}
	p {
		font-size: 0.5rem;

		margin-top: 4px;
		margin-bottom: auto;
	}
	button {
		font-size: 1rem;
		margin-right: 0.5rem;

		padding: 0.25rem 1.1rem;
		outline: unset;
		align-self: flex-start;

		background-color: #008000;
		color: #fff;
		border-radius: 8px;
		border-color: #2dc653;

		:hover {
			background-color: #2dc653;
			cursor: pointer;
		}
	}

	@media (max-width: 800px) {
		width: 60%;
	}

	@media (max-width: 500px) {
		width: 90%;
	}
`;

export const ButtonCancel = styled.a`
	padding: 0.5rem 1rem;
	margin-left: 0.5rem;
	align-self: flex-end;

	background-color: #fff;
	border: 3px solid var(--purple);
	border-radius: 8px;
	color: #000;

	:hover {
		border-color: #d00000;
		color: #d00000;
		cursor: pointer;
	}
`;

export const OverlayModal = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: rgba(0, 0, 0, 0.7);
`;

export const InlineDiv = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;
