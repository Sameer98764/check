import React from 'react';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const robot = Roboto({
  subsets: ['latin-ext'],
  weight: '100',
});

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 md:px-20 py-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <h1 className={`${robot.className} font-black text-[28px] md:text-[56px] text-center md:text-left`}>
            Learn new skills online with ease
          </h1>
          <p className={`${robot.className} text-black font-[400] text-[16px] md:text-[18px] text-center md:text-left`}>
            Discover a wide range of courses covering a variety of <br />
            subjects, taught by expert instructors.
          </p>
          <div className="space-x-3 pt-10 md:pt-20 text-center md:text-left">
            <button className={`${robot.className} text-[14px] sm:text-[16px] text-white rounded-md border h-[48px] bg-black w-[100px]`}>
              Start Learning
            </button>
            <button className={`${robot.className} text-[14px] sm:text-[16px] rounded-md border h-[48px] w-[120px]`}>
              Explore Course
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/image/image1.svg"
            alt="Hero"
            height={400}
            width={640}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Trusted by Companies Section */}
      <div className="h-auto w-full bg-[#F7F7F7] grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12 px-4 md:px-20 py-10">
        <div className={`${robot.className} font-[700] text-[20px] md:text-[24px] text-center md:text-left`}>
          Trusted by 2000+ companies worldwide.
        </div>

        {/* Logo Section */}
        <div className="flex flex-wrap justify-center space-x-7 md:space-x-4">
          <Image src="/image/logo1.svg" alt="logo1" height={38.52} width={123.8} className="w-auto h-[38px] object-contain" />
          <Image src="/image/logo2.svg" alt="logo2" height={38.52} width={123.8} className="w-auto h-[38px] object-contain" />
          <Image src="/image/logo3.svg" alt="logo3" height={38.52} width={123.8} className="w-auto h-[38px] object-contain" />
          <Image src="/image/logo4.svg" alt="logo4" height={38.52} width={123.8} className="w-auto h-[38px] object-contain" />
          <Image src="/image/logo5.svg" alt="logo5" height={38.52} width={123.8} className="w-auto h-[38px] object-contain" />
          <Image src="/image/logo6.svg" alt="logo6" height={38.52} width={123.8} className="w-auto h-[38px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;