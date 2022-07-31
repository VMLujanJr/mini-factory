import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_ME_BASIC } from '../utils/queries.js';
import Auth from '../utils/auth.js';
import MiniatureList from '../components/MiniatureList';
import Login from './Login';

const Home = () => {
    const { loading, data } = useQuery(QUERY_COMMENTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const comments = data?.comments || [];
    const loggedIn = Auth.loggedIn();

    return(
        <main className="container mx-auto md:container md:mx-auto grid md:grid-cols-2 md:auto-cols-max grid-cols-2 auto-cols-max">
            <MiniatureList />
            <Login />
        </main>
    );
};

export default Home;