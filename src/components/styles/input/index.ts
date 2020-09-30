import styled, { css } from "styled-components";

export const Input = styled.input`
${(props) =>
  css`
    border: none;
    font-size: 24px;
    padding-left: 10px;
    color: ${props.theme.colors.titleGrey};
    font-weight: 700;
    border-bottom: 1px solid ${props.theme.colors.background};
    font-family: 'Roboto', sans-serif;
`}
`;
