import './App.css';
import { Provider } from 'react-redux';
import { rootStore } from '../store/store';

import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from '../routes';

function App() {
  return (
    <Provider store={rootStore}>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
