import styled from 'styled-components';

const SearchStyle = styled.div`
	max-width: 60%;

	display: flex;
	margin: 0 auto;
	padding: 1rem 0;

	background-color: unset;

	input {
		height: 3rem;
		flex-grow: 2;
		margin-right: 1rem;
		padding: 8px;

		outline-color: var(--purple);
	}
	#buttonSearch {
		flex-grow: 0.2;

		background-color: #fff;
		outline: unset;
		border: unset;

		:hover {
			background-color: #cccccc;
			cursor: pointer;
		}
	}
	@media screen and (max-width: 500px) {
		max-width: 90%;
	}
`;

export default SearchStyle;
