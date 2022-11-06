import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import App from './components/App';

const firebaseConfig = {
  apiKey: 'AIzaSyAJrHohEYfv5yOxAUk_S3MmWxxhutQDweM',
  authDomain: 'hackathon-nis.firebaseapp.com',
  databaseURL: 'https://hackathon-nis-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hackathon-nis',
  storageBucket: 'hackathon-nis.appspot.com',
  messagingSenderId: '189266056817',
  appId: '1:189266056817:web:f456192749a0427acfadd0',
  measurementId: 'G-11G367XDX5',
};

const apollo = new ApolloClient({
  uri: 'https://api.baseql.com/airtable/graphql/appQByy1YezQozYEW',
  cache: new InMemoryCache(),
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={apollo}>
    <App auth={auth} />
  </ApolloProvider>,
);
