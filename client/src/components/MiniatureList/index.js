import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MiniatureList = () => {

    return (
        <section id="#home" className="overflow-hidden text-gray-700 ">
            <div className="gap-8 columns-2">
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={require(`../../assets/large/3.jpg`).default} />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={require(`../../assets/large/2.jpg`).default} />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={ require(`../../assets/large/1.jpg`).default } />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={ require(`../../assets/large/0.jpg`).default } />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={require(`../../assets/medium/0.jpg`).default} />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={ require(`../../assets/medium/1.jpg`).default} />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={require(`../../assets/medium/2.jpg`).default} />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={ require(`../../assets/medium/3.jpg`).default } />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={ require(`../../assets/medium/4.jpg`).default } />
                    </div>
                </div>
                <div className="gap-8 columns-2 m-1">
                    <div className="w-64 py-px-1 px-px lg:p-4">
                        <img alt="gallery" className="object-center w-64 h-64 rounded-lg"
                            src={ require(`../../assets/small/0.jpg`).default } />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiniatureList;