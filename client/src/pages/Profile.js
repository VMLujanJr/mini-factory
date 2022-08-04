import React from "react";

const Profile = () => {
    return (
        <>
            <section className="bg-custom-aqua py-8">
                <div className="container py-8 px-6 mx-auto">
                    <h3 className="text-custom-white uppercase tracking-wide no-underline hover:no-underline font-bold  text-xl mb-8">
                        Brandon's Page!'
                    </h3>
                    <p className="text-custom-white mt-8 mb-8">
                        Welcome to My Page! Checkout my Mini's and let me know if anything peaks
                        your interest!{" "}
                    </p>
                    <br />
                    <p className="text-custom-white mt-8 mb-8">
                        
                        Careful Some Mini's are more aggresive than others!
                    </p>
                </div>
            </section>
            <section
                className="w-full mx-auto bg-custom-blue text-custom-white flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
                style={{ maxWidth: 1600, height: "32rem" }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                        <h1 className="text-custom white text-2xl my-4">
                            Current Mini's on Deck:
                        </h1>
                        <div
                            className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                            href=""
                        >
                            Beware!
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-custom-aqua py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <div
                                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-custom-white text-xl"
                            >
                                Store
                            </div>
                            <div className="flex items-center" id="store-nav-content">
                                <div
                                    className="pl-3 inline-block no-underline hover:text-black">
                                  
                                </div>
                                <div
                                    className="pl-3 inline-block no-underline hover:text-black"
                                >
                                   
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <div>
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="../../assets/small/0.jpg"
                                alt='my miniature'
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Product Name</p>
                            </div>
                            <p className="pt-1 text-custom-white">£9.99</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <div>
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="../../assets/medium/0.jpg"
                                alt=""
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Product Name</p>
                             
                            </div>
                            <p className="pt-1 text-custom-white">£9.99</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <div>
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="../../assets/medium/0.jpg"
                                alt=""
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Product Name</p>
                             
                            </div>
                            <p className="pt-1 text-custom-white">£9.99</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <div>
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="../../assets/medium/4.jpg"
                                alt=""
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Product Name</p>
                             
                            </div>
                            <p className="pt-1 text-custom-white">£9.99</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <div>
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="../../assets/large/2.jpg"
                                alt=""
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Product Name</p>
                             
                            </div>
                            <p className="pt-1 text-custom-white">£9.99</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <div>
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="../../assets/medium/1.jpg"
                                alt=""
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Product Name</p>
                             
                            </div>
                            <p className="pt-1 text-custom-white">£9.99</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
};

export default Profile;