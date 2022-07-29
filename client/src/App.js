import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import NoMatch from './pages/NoMatch';
import SingleComment from './pages/SingleComment.js';
import Profile from './pages/Profile.js';
import Signup from './pages/Signup.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${ token }` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloClient client={ client }>
      <Router>
        <div className=''>
          <Header />
          <div className=''>
            <Routes>
              <Route
                path='/'
                element={ <Home /> }
              />
              <Route
                path='/login'
                element={ <Login /> }
              />
              <Route 
                path='/signup'
                element={ <Signup />}
              />
              <Route path='/profile'>
                <Route path=':username' element={ <Profile />} />
                <Route path='' element={ <Profile/> } />
              </Route>
              <Route
                path='/comment/:id'
                element={ <SingleComment /> }
              />
              <Route
                path='*'
                element={ <NoMatch /> }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloClient>
  );
};

export default App;