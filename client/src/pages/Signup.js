import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth.js';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // const [addUser, { error }] = useMutation(ADD_USER);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            
            Auth.login(data.addUser.token);
        }
        catch (e) {
            console.error(e);
        }
    };

    return(
        <section className="flex flex-col w-[30rem] space-y-10 m-3">
            <div className="flex text-center text-4xl font-medium justify-center">Signup</div>
            <div className="gap-4 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <form onSubmit={handleFormSubmit} className='flex flex-col justify-center'>
                    <input
                        className="w-full m-3 border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        placeholder="Email or Username" 
                        name='username'
                        type='username'
                        id='username'
                        value={formState.username}
                        onChange={handleChange}
                    />
                    <input
                        className="w-full m-3 border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        placeholder="******" 
                        name="password"
                        type="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <button className="transform rounded-sm bg-indigo-600 py-2 px-4 font-bold duration-300 hover:bg-blue-400">SIGN UP</button>
                </form>
                { error && <div>Sign up failed</div> }
            </div>
        </section>
    );
};

export default Signup;
