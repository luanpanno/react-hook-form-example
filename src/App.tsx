import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from './assets/styles';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
