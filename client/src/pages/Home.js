import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_ME_BASIC } from '../utils/queries.js';
import Auth from '../utils/auth.js';
import MiniatureList from '../components/MiniatureList';
import Login from './Login.js';
import Signup from './Signup.js'
import Hero from '../components/Hero';

const Home = () => {
    const { loading, data } = useQuery(QUERY_COMMENTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const comments = data?.comments || [];
    const loggedIn = Auth.loggedIn();

    return(
        <main className="container mx-auto md:container md:mx-auto grid md:grid-cols-1 md:auto-cols-max grid-cols-1 auto-cols-max">
            <MiniatureList />
        </main>
    );
};

export default Home;