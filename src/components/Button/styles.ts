import styled, { css } from 'styled-components';

type Colors = 'primary' | 'secondary' | 'warning' | 'light';
interface Props {
  color: Colors;
  outline?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    grey: string;
    red: string;
  };
}

function getColors(color: Colors, theme: Theme) {
  const COLORS = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    light: theme.colors.grey,
    warning: theme.colors.red,
  };

  return COLORS[color];
}

export const ButtonStyles = css<Props>`
  outline: none;
  border-radius: 2px;
  padding: 5px 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background 100ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.disabled && '#ccc'};
  min-height: 30px;
  font-size: 0.9rem;

  svg {
    font-size: 1.5rem;
  }
`;

export const ButtonOutline = styled.button<Props>`
  ${ButtonStyles}

  color: ${(props) => getColors(props.color, props.theme)};
  background-color: transparent;
  border: 1px solid
    ${(props) =>
      props.disabled ? '#ccc' : getColors(props.color, props.theme)};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonSolid = styled.button<Props>`
  ${ButtonStyles}

  color: white;
  background-color: ${(props) =>
    props.disabled ? '#ccc' : getColors(props.color, props.theme)};
  border: none;

  &:hover {
    background-color: ${(props) =>
      props.color === 'primary' &&
      !props.disabled &&
      props.theme.colors.secondary};
  }
`;
