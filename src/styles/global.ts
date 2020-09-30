import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) =>
  css`
    html {
      /* height: 100%; */
      font-family: "Roboto", sans-serif;
      background-color: "#EDF0F2";

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
          padding: 100px;
        }
      }
    }
  `}`;
