import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth.js';

const Header = () => {

    const logout = event => {
        event.preventDefault();

        Auth.logout();
    };

    return (
        <header>
            <div className="flex items-center justify-between flex-wrap bg-custom-teal p-6">
                <Link to='/' className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <h1 className="font-semibold text-xl tracking-tight">Mini-Factory</h1> 
                </Link>
                
                <nav className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                    { Auth.loggedIn() ? (
                        <>
                            <Link to='/profile'>Me</Link>
                            <a href='/' onClick={ logout }>
                                Logout
                            </a>
                        </>
                        ) : (
                        <>
                            <div className='text-sm lg:flex-grow'>
                                <Link to='/login' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Login</Link>
                                <Link to='/signup' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Signup</Link>
                                <Link to='/contact' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">Contact</Link>
                            </div>
                        </>
                        )
                    }
                </nav>
            </div>
        </header>
    )
};

export default Header;