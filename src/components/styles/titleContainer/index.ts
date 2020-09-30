import styled, { css } from "styled-components";

export const TitleContainer = styled.div`
    ${(props) =>
  css`
    display: flex;
    align-items: center;
    width: 50%;
    border-bottom: 1px solid ${props.theme.colors.grey};
    `}
`;
