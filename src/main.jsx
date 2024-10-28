import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="usptotrademarkrevive.com"
      
      authorizationParams={{
        redirect_uri: "https://usptotrademarkrevive.com", 
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
