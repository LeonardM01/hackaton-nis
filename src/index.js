import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import { NhostApolloProvider } from '@nhost/react-apollo';
import App from './components/App';

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NhostReactProvider nhost={nhost}>
    <NhostApolloProvider nhost={nhost}>
      <App />
    </NhostApolloProvider>
  </NhostReactProvider>,
);
