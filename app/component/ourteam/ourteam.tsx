import { Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const robot = Roboto({
    subsets: ["latin"],
    weight: '100'
});

const OurTeam = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 bg-[#F7F7F7] py-8'>
            <div className='text-center mb-8'>
                <h1 className={`${robot.className} font-bold text-4xl md:text-5xl`}>Our Team</h1>
                <p className={`${robot.className} font-normal text-lg md:text-xl pt-3`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* Main Content */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                <div className='flex justify-center'><Image src={"/image/img1.svg"} alt='img1' height={273} width={394.67} /></div>
                <div className='flex justify-center'><Image src={"/image/img2.svg"} alt='img2' height={273} width={394.67} /></div>
                <div className='flex justify-center'><Image src={"/image/img3.svg"} alt='img3' height={273} width={394.67} /></div>
                <div className='flex justify-center'><Image src={"/image/img4.svg"} alt='img4' height={273} width={394.67} /></div>
                <div className='flex justify-center'><Image src={"/image/img5.svg"} alt='img5' height={273} width={394.67} /></div>
                <div className='flex justify-center'><Image src={"/image/img6.svg"} alt='img6' height={273} width={394.67} /></div>
            </div>

            {/* Customer Testimonials */}
            <div className='text-center mb-8'>
                <h1 className={`${robot.className} font-bold text-4xl md:text-5xl`}>Customer Testimonials</h1>
                <p className={`${robot.className} font-normal text-lg md:text-xl pt-3`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='flex justify-center pt-12'>
                    <Image src={"/image/content.svg"} alt='content' height={417} width={1152} className='w-full max-w-2xl' />
                </div>
            </div>

            <div className='flex justify-center'>
                <Image src={"/image/last.svg"} alt='last' height={684} width={1280} className='w-full' />
            </div>
        </div>
    );
}

export default OurTeam;