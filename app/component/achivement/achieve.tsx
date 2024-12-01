import { Roboto } from 'next/font/google';
import React from 'react';

const robot = Roboto({
    subsets: ["greek-ext"],
    weight: '100'
});

const Achieve = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 py-8'>
            <div className='text-center mb-8'>
                <h1 className={`${robot.className} font-bold text-4xl md:text-5xl`}>Our Achievements</h1>
                <p className='text-base md:text-lg mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8'>
                <div className='flex flex-col items-center'>
                    <h1 className={`${robot.className} font-bold text-4xl md:text-5xl`}>+200</h1>
                    <p className='text-sm md:text-base'>Courses</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className={`${robot.className} font-bold text-4xl md:text-5xl`}>500K</h1>
                    <p className='text-sm md:text-base'>Mentors</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className={`${robot.className} font-bold text-4xl md:text-5xl`}>+200</h1>
                    <p className='text-sm md:text-base'>Courses</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className={`${robot.className} font-bold text-4xl md:text-5xl`}>500K</h1>
                    <p className='text-sm md:text-base'>Mentors</p>
                </div>
            </div>
        </div>
    );
}

export default Achieve;