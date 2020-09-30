import styled, { css } from "styled-components";

interface Props {
  active: boolean;
  size?: string;
}

export const ButtonMain = styled.button.attrs(
  (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => ({
    type: props.type || "button",
  })
)`
  ${({ theme }) =>
    css`
      display: block;
      font-size: 28px;
      border: 3px solid ${theme.colors.orangeyPink};
      background-color: white;
      color: ${theme.colors.orangeyPink};
      padding: 10px;
    `}
`;

export const ButtonToggle = styled(ButtonMain)<Props>`
  background-color: white;
  font-size: ${(props) => props.size || "28px"};
  ${({ active, theme }) =>
    active &&
    `
    opacity: 1;
    background-color: ${theme.colors.orangeyPink};
    color: white;
  `}
`;
