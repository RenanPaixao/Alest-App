import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #ffffff;
    --color-lightGreen: #80FFA8;
    --color-purple: #3F1A30;
    --color-green: #64B788;
    --width-available: ${() => {
		return window.screen.availWidth;
	}}
  }
`;

export default GlobalStyle;
