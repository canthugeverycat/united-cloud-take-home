import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';
import { Provider } from 'react-redux';
import store from './store';

const RootComponent = () => {
  return (
    <React.StrictMode>
      <Provider {...{store}}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RootComponent />);

reportWebVitals();
