import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const robot = Roboto({
    subsets: ["latin-ext"],
    weight: '100'
});

const Course = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className='text-center mt-16'>
                <h1 className={`${robot.className} font-black text-3xl md:text-5xl`}>Explore Courses By Category</h1>
                <p className={`${robot.className} font-normal pt-5 text-lg md:text-xl`}>
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-12'>
                <Link href={""}>
                    <Image src={"/image/card1.svg"} alt='card1' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card2.svg"} alt='card2' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card3.svg"} alt='card3' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card4.svg"} alt='card4' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card5.svg"} alt='card5' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card6.svg"} alt='card6' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card7.svg"} alt='card7' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card8.svg"} alt='card8' width={410.67} height={132} className="w-full h-auto" />
                </Link>
                <Link href={""}>
                    <Image src={"/image/card9.svg"} alt='card9' width={410.67} height={132} className="w-full h-auto" />
                </Link>
            </div>

            <div className='flex items-center justify-center pt-7'>
                <button className={`${robot.className} text-lg bg-white text-black rounded-md border h-[48px] w-[155px]`}>
                    View All Courses
                </button>
            </div>
        </div>
    );
};

export default Course;