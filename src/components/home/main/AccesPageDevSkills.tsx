// Native
import React from 'react';
import Image from 'next/image';
import { Oswald } from 'next/font/google';

// Imgs
import { skillsImgs } from '@/data/skillsImgs';

// Components
import { ButtonLink } from '@/components/utils/ButtonLink';

const oswald = Oswald({
  weight: '500',
  subsets: ['latin'],
});

export const AccesPageDevSkills = (): React.ReactNode =>
  <section className={`devSkillHome flex flex-col justify-center items-center 
  w-[45%] m-[40px] ml-0`}>
    <h1 className={`h1DevSkillHome ${oswald.className}`}>Developer Skills</h1>
    <div className={`wrapImgsSkillsHome flex justify-center items-center 
    flex-wrap mb-5`}>
      {skillsImgs.map((img) => 
        <Image key={img.id} alt='Símbolos das línguagens de programação' 
          src={img.img} className={`imgGoSkills m-3`}/>)}
    </div>
    <ButtonLink link='/develop-infos' text='Skills'/>
  </section>