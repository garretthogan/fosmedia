import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'rebass';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = {
  fonts: {
    sans: '"questrial", sans-serif',
  },
  colors: {
    orange: 'rgb(233, 161, 75)',
  },
  fontSizes: [12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72],
  fontWeights: {
    small: 100,
    normal: 400,
    bold: 700,
  }
};

ReactDOM.render(<Provider theme={theme}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
