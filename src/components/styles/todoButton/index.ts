import styled, { css } from "styled-components";

export const TodoButton = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
    type: props.type || "button",
  })
)`
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.orangeyPink};
      padding: 10px;
      border: none;
      color: white;
      border-radius: 15px;
      margin: 0px 2px;
    `}
`;
