import styled from 'styled-components';

export const ModalStyle = styled.div`
	width: 22rem;
	height: 20rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 16vh auto 0;
	padding: 2rem;

	background-color: var(--white);
	border-radius: 4px;
`;

export const ButtonCancel = styled.a`
	padding: 0.5rem 1rem;

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
