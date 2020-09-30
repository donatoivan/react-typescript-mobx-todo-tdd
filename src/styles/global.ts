import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) =>
  css`
  html {
    height: 100%;
    font-family: 'Roboto', sans-serif;

    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
      *:focus {
        outline: none;
      }


      #app {
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: ${theme.colors.background};
        padding: 100px;
      }
    }
  }`}`;
