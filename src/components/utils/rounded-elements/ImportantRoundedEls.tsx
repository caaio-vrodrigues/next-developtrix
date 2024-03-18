// Native
import React, { ElementType } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// data
import { roundedElsIcons } from "@/data/rounde-icons";

// components
import { RoundedButton } from './RoundedButton';
import { RoundedLink } from './RoundedLink';

type TRoundedEls = {
  id: number
  icon?: ElementType
  img?: StaticImport
  link: string
};

export const ImportantRoundedEls = (): React.ReactNode => 
  <div className={`containerImportantEls flex flex-col justify-center 
  items-center`}>
    {roundedElsIcons.map((roundElInfos): React.ReactNode => {
      const { id, icon, img, link }: TRoundedEls = roundElInfos;
      
      return (
        <div key={id} className={`wrapImportantRoundedEl flex justify-center 
        items-center w-[84vw] pt-3 pb-3`}>{
          img ? <RoundedButton key={id} id={id} img={img}/>
            : <RoundedLink key={id} id={id} link={link} icon={icon}/>}
        </div>)})}
  </div>