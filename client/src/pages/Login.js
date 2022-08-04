import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations.js';
import Auth from '../utils/auth.js';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
      console.log(data);

      Auth.login(data.login.token);
    }
    catch (e) {
      console.log(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <section className="flex flex-col w-[30rem] space-y-10 m-3">
      <div className="flex text-center text-4xl font-medium justify-center">Login</div>
      <div className="gap-4 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <form onSubmit={handleFormSubmit} className='flex flex-col justify-center'>
          <input
            className="w-full m-3 border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
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
          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-blue-400">LOGIN</button>
        </form>

        {error && <div>Login failed</div>}
      </div>
    </section>
  );
};

export default Login;