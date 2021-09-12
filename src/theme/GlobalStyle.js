import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    scroll-behavior: smooth;
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.background.main};
  }
  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.background.main};
  }
  textarea {
  resize: none;
}
`;

export default GlobalStyle;
