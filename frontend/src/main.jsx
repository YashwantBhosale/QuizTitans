import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-lgfh33tsshamobc2.us.auth0.com"
    clientId="0Q0qsLyH75SgEFDxkNiIslYn58wYS4W9"
    authorizationParams={{
      redirect_uri: `${window.location.origin}/home`
    }}
  >
    <App />
  </Auth0Provider>,
);