'use client';

// Native
import React, { useContext } from 'react';
import Image from 'next/image';

// Context
import ContextMaster from '@/context/ContextMasterProvider';

// Components
import { ButtonCaroussel } from "./ButtonCarousel";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type TTopicCaroussel = {
  topics: {
    id: number
    img: StaticImport
  }[]
};

export const TopicCaroussel = ({ topics }: TTopicCaroussel): React.ReactNode => {
  const { idCaroussel } = useContext(ContextMaster);

  return (<>
    {topics.map((topic) => idCaroussel === topic.id && 
      <article key={topic.id} className={`flex justify-center items-center 
      w-[680px]`}>
        <ButtonCaroussel leng={topics.length} direction='left'/>
        <div className={`w-[100%] flex justify-center items-center`}>
          <Image alt='Símbolos das linguagens de programação.' src={topic.img}/>
        </div>
        <ButtonCaroussel leng={topics.length} direction='rigth'/>
      </article>
    )}</>
  );
};