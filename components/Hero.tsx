import React from 'react'
import PhotoHolder from './PhotoHolder';

const Hero = () => {
  return (
    <section className="h-dvh scroll-mt-7" id="/">
    <div className="container mx-auto pt-65 h-full">
    <div className="flex flex-col xl:flex-row items-center justify-between pt-10 xl:pt-16 pb-16 xl:pb-24 ">
    {/* text */}
    <div className="text-center xl:text-left order-2 xl:order-none">
    <span className="text-xl">Web Developer</span>
    <h1 className="h1">
    Hello I&apos;m <br /> <span className='text-myColor-teal4 text-teal'>Md. Golam Azam</span>
    </h1>
    <p className="max-w-[500px] mb-9 text-white/90">I am proficient in various programming languages and technologies and honing towards Web Development to outstand.</p>
    </div>
    {/* photo */}
    <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <PhotoHolder />
    </div>
    </div>
    </div>
    </section>
  );
}

export default Hero