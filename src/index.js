import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './state/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* components under Provider can access states in store */}
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
