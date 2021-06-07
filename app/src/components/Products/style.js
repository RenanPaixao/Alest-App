import styled from 'styled-components';

const WrapperCards = styled.div`
	max-width: 60%;
	justify-content: center;
	min-height: 82vh;

	display: flex;
	flex-wrap: wrap;
	margin: 0 auto 2rem;

	background-color: var(--white);
	border-radius: 8px;

	h1 {
		margin: 40vh auto;
	}

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
export default WrapperCards;
