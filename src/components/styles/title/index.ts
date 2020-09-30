import styled, { css } from "styled-components";

export const Title = styled.h2`
${(props) =>
  css`
    text-align: center;
    padding: 10px;
    color: ${props.color || props.theme.colors.orangeyPink}
    `}
`;
