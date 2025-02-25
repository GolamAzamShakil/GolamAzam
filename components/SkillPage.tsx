import React from 'react'
import { ContainerScroll } from './ui/container-scroll';
import { CardHoverEffect } from './ui/card-hover-effect';
import { skillList } from '@/app/data/SkillData';

const skillPage = () => {
  return (
    <section className="w-full max-h-min py-3 scroll-mt-7" id="skills">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll titleComponent={
          <>
          <h1 className="text-4xl font-semibold text-primary">
              Expanding my experiences with <br />
              <span className="text-3xl md:text-[5.5rem] font-bold mt-1 leading-none">
                The Skillset
              </span>
            </h1>
          </>
        }>
          <div className='mx-auto object-center overflow-auto'>
            <CardHoverEffect items={skillList} />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}

export default skillPage