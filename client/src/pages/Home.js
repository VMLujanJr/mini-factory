import React from 'react';
import MiniatureList from '../components/MiniatureList';

const Home = () => {

    return(
        <main className="container mx-auto md:container md:mx-auto grid md:grid-cols-1 md:auto-cols-max grid-cols-1 auto-cols-max">
            <MiniatureList />
        </main>
    );
};

export default Home;