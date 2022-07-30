import React, { useState } from 'react';
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

 import Header from './components/Header';
 import Footer from './components/Footer';
 import Home from './pages/Home.js';
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
  const [categories] = useState([
    {
      name: 'large',
      description: 'Photos of large creatures'
    },
    {
      name: 'medium',
      description: 'Photos of medium creatures'
    },
    {
      name: 'small',
      description: 'Photos of small creatures'
    }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <ApolloProvider client={ client }>
      {<Router>
        <div className='flex-column justify-flex-start min-100-vh'>
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
          <Footer/>
        </div>
      </Router>}
    </ApolloProvider>
  );
};

export default App;