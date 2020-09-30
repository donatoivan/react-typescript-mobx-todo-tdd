import styled, { css } from "styled-components";

export const TitleTodo = styled.h2`
    ${(props) =>
  css`
    margin:0;
    padding-left: 10px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid ${props.theme.colors.background};
    width: 100%;
    color: ${props.theme.colors.titleGrey};
    word-wrap: break-word; 
    `}
`;
