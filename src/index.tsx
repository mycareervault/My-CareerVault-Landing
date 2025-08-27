import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, MantineProvider } from '@mantine/core';
// core styles are required for all packages
import '@mantine/core/styles.css';
// Import Poppins font
import '@fontsource/poppins/index.css';
// Import global styles
import './App.css';

const theme = createTheme({
  colors: {
    primary: [
      '#4C6DFE', // Primary color
      '#4C6DFE',
      '#4C6DFE',
      '#4C6DFE',
      '#4C6DFE',
      '#4C6DFE',
      '#4C6DFE',
      '#4C6DFE',
      '#4C6DFE',
      '#4C6DFE',
    ],
    secondary: [
      '#011365', // Secondary color
      '#011365',
      '#011365',
      '#011365',
      '#011365',
      '#011365',
      '#011365',
      '#011365',
      '#011365',
      '#011365',
    ],
    primaryText: [
      '#0B0914', // Primary Text color
      '#0B0914',
      '#0B0914',
      '#0B0914',
      '#0B0914',
      '#0B0914',
      '#0B0914',
      '#0B0914',
      '#0B0914',
      '#0B0914',
    ],
  },
  fontFamily: 'Poppins, sans-serif',
  primaryColor: 'primary',
});

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </React.StrictMode>,
  );
}
