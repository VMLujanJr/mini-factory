import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MiniatureList = () => {

    const [miniatureList, setMiniatureList] = useState([]);

    useEffect(() => {
        // Use GraphQL API call to populate state
        setMiniatureList([{
            productName: 'Purple Troll',
            sizeCategory: 'Large',
            price: '$30',
            picture: '/assets/large/0.jpg',
            description: 'Large purple zombie troll',
            profile: 'tnancy2',
        }, {
            productName: 'Skeleton',
            sizeCategory: 'Large',
            price: '$30',
            picture: '/assets/large/1.jpg',
            description: 'Large zombie skeleton',
            profile: 'spepe22',
        }, {
            productName: 'Demon',
            sizeCategory: 'Large',
            price: '$30',
            picture: '/assets/large/2.jpg',
            description: 'Large warrior demon',
            profile: 'hihey2',
        }, {
            productName: 'Dragon',
            sizeCategory: 'Large',
            price: '$30',
            picture: '/assets/large/3.jpg',
            description: 'Large blue dragon',
            profile: 'moony',
        }, {
            productName: 'Wizard with clear dragon',
            sizeCategory: 'Medium',
            price: '$20',
            picture: '/assets/medium/0.jpg',
            description: 'Blue wizard with clear dragon',
            profile: 'vicvic100',
        }, {
            productName: 'Female warrior',
            sizeCategory: 'Medium',
            price: '$20',
            picture: '/assets/medium/1.jpg',
            description: 'Blue female warrior with sword',
            profile: 'brandjs',
        }, {
            productName: 'Blue troll',
            sizeCategory: 'Medium',
            price: '$20',
            picture: '/assets/medium/2.jpg',
            description: 'Blue troll with sword',
            profile: 'michh1',
        }, {
            productName: 'Snake Wizard',
            sizeCategory: 'Medium',
            price: '$20',
            picture: '/assets/medium/3.jpg',
            description: '3 snake wizard',
            profile: 'keikei',
        }, {
            productName: 'Warrior',
            sizeCategory: 'Medium',
            price: '$20',
            picture: '/assets/medium/4.jpg',
            description: 'Male zombie warrior',
            profile: 'pants6',
        }, {
            productName: 'Zombie hand',
            sizeCategory: 'Small',
            price: '$10',
            picture: '/assets/small/0.jpg',
            description: 'Zombie hand',
            profile: 'awegreat2',
        }
        ]);
    }, []);

    const cards = miniatureList.map(e => {
        const imagePath = process.env.PUBLIC_URL + e.picture;
        return (
            <div className="flex flex-wrap w-1/5 pb-3 md:pb-3">
                <div className="w-full p-5 md:p-10 text-center">
                    <Link to={`./profile/${e.profile}`}>
                        <img alt={e.description} className="block object-cover object-center w-full h-full rounded-lg" src={imagePath} />
                    </Link>
                    <span className='font-mono'>{e.productName} - {e.price}</span><br />
                    <span className='font-mono'>{e.sizeCategory}</span>
                </div>
            </div>
        );
    });

    return (
        <section className="overflow-hidden text-gray-700 w-max">
            <div className="container px-2 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    {cards}
                </div>
            </div>
        </section>
    );
};

export default MiniatureList;