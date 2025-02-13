import React from 'react'
import PhotoHolder from './PhotoHolder';
import { LampContainer } from './ui/lamp';

const Hero = () => {
  return (
    <section className="min-h-svh scroll-mt-7" id="/">
      <div className="pt-65 container mx-auto h-full">
        {/*<div className="">
          <LampContainer>
          <p className="mb-9 max-w-[500px] text-white/90">
              I am proficient in various programming languages and technologies
              and honing towards Web Development to outstand.
            </p>
          </LampContainer>
        </div>*/}
        <div className="flex flex-col xl:flex-row items-center justify-between pb-16 pt-10 xl:pb-24 xl:pt-16">
          {/* text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <h1 className="h1">
              Hello, I&apos;m <br />{' '}
              <span className="text-primary">
                Md. Golam Azam
              </span>
            </h1>
            {/*<span className="text-xl">
              Web and Mobile Application Developer
            </span>*/}
            <br />
            <p className="mt-7 mb-9 max-w-[500px] text-neutral-950/90 dark:text-white/90 text-base">
              I am proficient in various programming languages and technologies
              and honing towards <span className='font-bold'> Web and Mobile Application Development </span> to outstand among others.
            </p>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <PhotoHolder />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero