import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const robot = Roboto({
    subsets: ["latin"],
    weight: '100'
});

const Head1 = () => {
    return (
        <div className='h-auto max-w-screen-xl mx-auto mt-9 px-4'>
            <div className='flex flex-wrap items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <p className={`${robot.className} font-normal text-sm md:text-base`}>Phone Number: 956 742 455 678</p>
                    <span>|</span>
                    <p className={`${robot.className} font-normal text-sm md:text-base`}>Email: info@ddsgnr.com</p>
                </div>

                {/* Icons */}
                <div className='flex space-x-5 mt-2 md:mt-0'>
                    <Link href={""}>
                        <Image src={"/image/f.svg"} alt='Facebook' height={24} width={24} />
                    </Link>
                    <Link href={""}>
                        <Image src={"/image/i.svg"} alt='Instagram' height={24} width={24} />
                    </Link>
                    <Link href={""}>
                        <Image src={"/image/t.svg"} alt='Twitter' height={24} width={24} />
                    </Link>
                    <Link href={""}>
                        <Image src={"/image/l.svg"} alt='LinkedIn' height={24} width={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Head1;