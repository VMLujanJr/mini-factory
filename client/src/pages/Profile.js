import React from "react";

const Profile = () => {
    return (
        <>
            <section className="bg-custom-aqua py-8">
                <div className="container py-8 px-6 mx-auto">
                    <h3 className="text-custom-white uppercase tracking-wide no-underline hover:no-underline font-bold  text-xl mb-8">
                        (User's Name Goes Here)'s Page!'
                    </h3>
                    <p className="text-custom-white mt-8 mb-8">
                        Welcome to My Page! Checkout my Mini's and let me know if anything peaks
                        your interest!{" "}
                    </p>
                </div>
            </section>
            <section
                className="w-full mx-auto bg-slate-100 text-black flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
                style={{ maxWidth: 1600, height: "32rem" }}>
                <div className="container mx-auto">
                    <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                        <h1 className="text-custom white text-2xl my-4">
                            Current Mini's on Deck:
                        </h1>
                    </div>
                    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                        <div>
                            <img
                                className="flex flex-wrap mt-10-m-1 md:-m-2"
                                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                                alt='my miniature'
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Product Name</p>
                                <img
                                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                                    src="../../assets/demon-back.jpg"
                                    alt='my miniature'
                                />
                            </div>
                            <p className="pt-1 text-custom-white">$9.99</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <div>
                            <img
                                className="hover:grow py-3 px-3hover:shadow-lg"
                                src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                                alt=""
                            />
                            <div className="pt-3 flex text-custom-white items-center justify-between">
                                <p className="">Muh</p>
                                <img
                                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                                    src="../../assets/demon-back.jpg"
                                    alt=""
                                />
                            </div>
                            <p className="pt-1 text-custom-white">$9.99</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Profile;