import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
    return (
        <>
            <section className="bg-white py-8">
                <div className="container py-8 px-6 mx-auto">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
                        (User's Name Goes Here)'s Page!'
                    </a>
                    <p className="mt-8 mb-8">
                        Welcome to My Page! Checkout my Mini's and let me know if anything peaks
                        your interest!{" "}
                    </p>
                    <br />
                    <p className="mt-8 mb-8">
                        {" "}
                        Careful Some Mini's are more aggresiv than others!{" "}
                    </p>
                </div>
            </section>
            <section
                className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right"
                style={{ maxWidth: 1600, height: "32rem" }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                        <h1 className="text-black text-2xl my-4">
                            Stripy Zig Zag Jigsaw Pillow and Duvet Set
                        </h1>
                        <a
                            className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                            href="#"
                        >
                            products
                        </a>
                    </div>
                </div>
            </section>
            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <a
                                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                                href="#"
                            >
                                Store
                            </a>
                            <div className="flex items-center" id="store-nav-content">
                                <a
                                    className="pl-3 inline-block no-underline hover:text-black"
                                    href="#"
                                >
                                    <svg
                                        className="fill-current hover:text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                    </svg>
                                </a>
                                <a
                                    className="pl-3 inline-block no-underline hover:text-black"
                                    href="#"
                                >
                                    <svg
                                        className="fill-current hover:text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <a href="#">
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            />
                            <div className="pt-3 flex items-center justify-between">
                                <p className="">Product Name</p>
                                <img
                                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                                    src="../../assets/demon-back.jpg"
                                />
                            </div>
                            <p className="pt-1 text-gray-900">£9.99</p>
                        </a>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                        <a href="#">
                            <img
                                className="hover:grow hover:shadow-lg"
                                src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
                            />
                            <div className="pt-3 flex items-center justify-between">
                                <p className="">Product Name</p>
                                <img
                                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                                    src="../../assets/demon-back.jpg"
                                />
                            </div>
                            <p className="pt-1 text-gray-900">£9.99</p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Profile;