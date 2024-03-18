// Native
import React, { ElementType } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// data
import { roundedElsIcons } from "@/data/rounde-icons";

// components
import { RoundedButton } from '@/components/utils/rounded-elements/RoundedButton';
import { RoundedLink } from '@/components/utils/rounded-elements/RoundedLink';

type TRoundedEls = {
  id: number
  icon?: ElementType
  img?: StaticImport
  link: string
};

export const SocialFoot = () => 
  <section className={`wrapSocialFootSec flex justify-end w-[50%] text-end`}>
    {roundedElsIcons.map((roundElInfos): React.ReactNode => {
      const { id, icon, img, link }: TRoundedEls = roundElInfos;
      
      return <>
        {img ? 
          <RoundedButton key={id} id={id} img={img}/>
        : <span key={id} className={`ml-[10px]`}>
            <RoundedLink id={id} link={link} icon={icon}/>
          </span>}
      </>})}
  </section>