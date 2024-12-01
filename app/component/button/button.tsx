import { Roboto } from 'next/font/google';
import React from 'react';

const robot = Roboto({
    subsets: ["greek-ext"],
    weight: '100'
});

const Button = () => {
    return (
        <div className="flex justify-center">
            <button className={`${robot.className} text-base md:text-lg text-black rounded-md border border-black h-10 w-28 md:h-12 md:w-32 transition duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50`}>
                Sign Up
            </button>
        </div>
    );
}

export default Button;