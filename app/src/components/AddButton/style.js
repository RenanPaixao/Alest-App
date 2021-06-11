import styled from 'styled-components';

const AddButtonStyle = styled.div`
	width: 80px;
	height: 2rem;

	display: flex;
	align-items: center;
	justify-content: center;

	margin: 1rem 0 -0.55rem 20%;
	border-color: var(--white);
	border-radius: 5px;

	background-color: var(--white);
	font: 400 14.3333px Arial;
	color: #7e758b;

	:hover {
		cursor: pointer;
		color: #000;
	}
	@media (max-width: 1000px) {
		margin-left: 5%;
	}
	@media (max-width: 850px) {
		margin-left: 10%;
	}
	@media (max-width: 635px) {
		margin-left: 0;
	}
`;
export default AddButtonStyle;
