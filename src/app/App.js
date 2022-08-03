import './App.css';
import '../assets/styles/global.css';
import { Provider } from 'react-redux';
import { rootStore } from '../store/store';

import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from '../routes';
import theme from '../theme';

function App() {
  return (
    <Provider store={rootStore}>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
