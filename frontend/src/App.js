import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Amplify Demo</h1>
        <h2>Hello {user.username}</h2>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App); 