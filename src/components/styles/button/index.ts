import styled, { css } from "styled-components";

interface Props {
  active: boolean;
}

export const Button = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`${({ theme }) =>
  css`
    display: block;
    font-size: 28px;
    border:  3px solid ${theme.colors.orangeyPink};
    background-color: white;
    color:  ${theme.colors.orangeyPink};
    padding: 10px;
    `}
`;

export const ButtonToggle = styled(Button)<Props>`
    background-color: white;
  ${({ active, theme }) =>
  active &&
  `
    opacity: 1;
    background-color: ${theme.colors.orangeyPink};
    color: white;
  `}
`;
