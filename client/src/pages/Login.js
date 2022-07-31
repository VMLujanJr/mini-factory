import React from 'react';

const Login = () => {
    return(
        <section className="flex w-[30rem] flex-col space-y-10  w-max">
            <div className="text-center text-4xl font-medium">Log In</div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
            </div>
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
            </div>
            <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-blue-400">LOG IN</button>
            <a href="#" className="transform text-center font-semibold text-gray-700 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
            <p className="text-center text-lg">No account?
                <a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
            </p>
        </section>
    );
};

export default Login;