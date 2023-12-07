import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      color: rgb(var(--foreground-rgb));
      background: linear-gradient(
          to bottom,
          transparent,
          rgb(var(--background-end-rgb))
        )
        rgb(var(--background-start-rgb));
      }
`;

export default GlobalStyle;