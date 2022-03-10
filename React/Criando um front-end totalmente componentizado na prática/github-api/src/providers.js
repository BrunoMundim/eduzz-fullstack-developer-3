import React from 'react';
import { GlobalStyle } from './global/GlobalStyle';
import GithubProviders from './providers/GithubProviders';
import App from './App'

const Providers = () => {
  return (
    <main>
      <GithubProviders>
        <GlobalStyle/>
        <App />
      </GithubProviders>
    </main>
    
  );
}

export default Providers;