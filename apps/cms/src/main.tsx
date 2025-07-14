import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { authConfig } from './auth_config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider {...authConfig}>
    <App />
  </Auth0Provider>
);