import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS, QUERY_ME_BASIC } from '../utils/queries.js';
import Auth from '../utils/auth.js';
import MiniatureList from '../components/MiniatureList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_COMMENTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const comments = data?.comments || [];
    const loggedIn = Auth.loggedIn();

    return(
        <main>
            <div className='flex-row justify-space-between'>
                <MiniatureList />
            </div>
        </main>
    );
};

export default Home;