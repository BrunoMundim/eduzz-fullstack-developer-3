import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from '../src/hooks/githubHooks';
import NoUser from './components/noUser';

const App = () => {

  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? 
            (<p>Loading</p> 
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoUser />
      )}       
    </Layout>
  );
}

export default App;
