import Image from 'next/image'
import { socialMedia } from '@/app/data/ResumeData';
import React from 'react'

const FooterPage = () => {
  return (
    <section className="w-full mt-60 pb-6 scroll-mt-7" id="footer">
      <footer className="max-h-80">
        <hr className="h-px w-3/4 mx-auto bg-gray-700"/>
          <div className="flex mt-24 mb-2 flex-col gap-3 justify-between items-center">
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <a href={info.lnk} key={info.id} target='_blanc'>
                <div
                  /*{key={info.id})*/
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-zinc-950 dark:bg-background rounded-lg border border-border dark:border-border"
                >{`${""}`}
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </div>
              </a>
            ))}
          </div>
          <p className="md:text-base text-sm md:font-normal font-light text-primary dark:text-primary">
            Copyright© {new Date().getFullYear()} Golam Azam
          </p>
        </div>
      </footer>
    </section>
  );
}

export default FooterPage