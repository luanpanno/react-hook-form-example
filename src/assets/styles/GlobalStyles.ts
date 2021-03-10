import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

html, body {
  width: 100%;
  height: 100%;

  &, *{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    outline: 0;
  }

  .react-confirm-alert-overlay {
    background: rgba(0, 0, 0, 0.2);
  }

  .__react_component_tooltip {
    max-width: 350px;
    white-space: pre-line;
  }
}

`;
export default GlobalStyles;
