import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ChakraProvider} from "@chakra-ui/react" 
// import HookForm from './react-hook-form/HookForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HookForm /> */}
    <ChakraProvider>
    <App/>
    </ChakraProvider>
  </React.StrictMode>
);


