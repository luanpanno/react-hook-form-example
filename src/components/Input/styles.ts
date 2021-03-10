/* eslint-disable max-len */
import styled from 'styled-components';

interface Props {
  hasError?: boolean;
  hasFocus?: boolean;
  type?: string;
  disabled?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.type === 'checkbox' ? 'row' : 'column')};
  align-items: ${(props) =>
    props.type === 'checkbox' ? 'center' : 'flex-start'};
  margin-top: ${(props) => props.type === 'checkbox' && '8px'};
  margin-bottom: 5px;

  label {
    color: ${(props) => (props.hasError ? props.theme.colors.red : 'black')};
    padding-left: ${(props) => props.type === 'checkbox' && '10px'};
    font-weight: 500;
  }

  input,
  select,
  textarea {
    margin: 5px 0;
    border-radius: 5px;
    outline: 0;
    background-color: #fff;
    padding: 5px;
    transition: all 100ms;
    font-size: 0.9rem;
    width: ${(props) => (props.type === 'checkbox' ? 'unset' : '100%')};
    border: 1px solid
      ${(props) => (props.hasError ? props.theme.colors.red : '#ccc')};
    ${(props) =>
      props.type === 'checkbox' && props.disabled && 'cursor: not-allowed;'}
    ${(props) => props.type === 'select' && 'min-width: 100px'};

    &:focus {
      outline: 0;
      border: 1px solid ${(props) => props.theme.colors.primary};
      box-shadow: 0 0 3px ${(props) => props.theme.colors.primary};
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.disabled};
      opacity: 1;
    }
  }

  textarea {
    height: 100px;
    resize: none;
  }
`;

export const InputWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
`;
