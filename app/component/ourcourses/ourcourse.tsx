import { Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import Button from '../button/button';

const robot = Roboto({
    subsets: ["latin"],
    weight: '100'
});

const OurCourse = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 py-8'>
            <div className='text-center mb-8'>
                <h1 className={`${robot.className} font-black text-4xl md:text-5xl`}>Courses</h1>
                <p className={`${robot.className} font-normal text-lg md:text-xl`}>Your Ultimate Guide to Learning</p>
            </div>

            <div className='mb-8'>
                <ul className='flex justify-center space-x-4 mb-4'>
                    <li className='cursor-pointer'>Popular</li>
                    <li className='cursor-pointer'>Recommended</li>
                    <li className='cursor-pointer'>Best Price</li>
                </ul>
            </div>

            {/* Course Sections */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {/* Section 1 */}
                {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className='flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden'>
                        <Image src={`/image/lap${index + 1}.svg`} alt={`lap${index + 1}`} width={416} height={300} className='w-full h-auto' />
                        <div className='p-4'>
                            <Image src={`/image/p${index + 1}.svg`} alt={`p${index + 1}`} width={382} height={122} className='w-full h-auto' />
                            <div className='flex justify-between items-center pt-3'>
                                <Button />
                                <p className={`${robot.className} font-medium text-lg`}>$400</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-8'>
                <button className={`${robot.className} text-lg text-black rounded-md border h-10 w-32`}>
                    View All Courses
                </button>
            </div>
        </div>
    );
};

export default OurCourse;