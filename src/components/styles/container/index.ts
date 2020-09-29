import styled, { css } from "styled-components";

export const MainContainer = styled.div`
    ${(props) =>
  css`
    max-width: 600px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    border: 20px solid ${props.theme.colors.orangeyPink};
    background-color: ${props.theme.colors.white};
    `}
`;
