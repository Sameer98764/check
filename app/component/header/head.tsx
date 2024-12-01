import React from 'react';
import { Inter, Roboto } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';

// Google Fonts
const roboto = Roboto({
  subsets: ['latin'],
  weight: '100'
});
const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  // Dynamic Navbar
  const headItems = [
    { name: 'Home', id: '' },
    { name: 'Courses', id: '' },
    { name: 'Services', id: '' },
    { name: 'Achievement', id: '' },
    { name: 'About Us', id: '' },
    { name: 'Testimonial', id: '' },
  ];

  return (
    <div className='h-auto w-full border'>
      <div className='bg-bghead flex flex-col md:flex-row items-center justify-between m-5 p-4'>
        <h1 className={`${inter.className} font-bold text-xl flex items-center`}>
          <Image src={'/image/image2.svg'} alt='icon' width={32.58} height={30.38} className='mr-2' />
          Ddsgnr
        </h1>
        <ul className={` ${roboto.className} flex flex-wrap justify-center md:justify-center space-x-4 md:space-x-14 text-black font-medium items-center text-[16px]`}>
          {headItems.map((item, i) => (
            <li key={i}>
              <Link href={item.id}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex space-x-3 mt-3 md:mt-0'>
          <button className={`${roboto.className} text-[16px] rounded-md border h-[40px] w-[100px]`}>
            Login
          </button>
          <button className={`${roboto.className} text-[16px] bg-black text-white rounded-md border h-[40px] w-[100px]`}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;