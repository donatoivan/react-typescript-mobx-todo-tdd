import styled, { css } from "styled-components";

export const InputContainer = styled.div`
 ${(props) =>
  css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 50%;
    border-bottom: 1px solid ${props.theme.colors.grey};
 `}
`;
