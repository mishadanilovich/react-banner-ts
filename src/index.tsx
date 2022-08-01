import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { App } from './containers';
import { store } from 'store';

import './styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
