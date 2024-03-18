// Native
import React, { ElementType } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// data
import { roundedElsIcons } from "@/data/rounde-icons";

// Components
import { RoundedLink } from "./RoundedLink";
import { RoundedButton } from "./RoundedButton";

type TRoundedEls = {
  id: number
  icon?: ElementType
  img?: StaticImport
  link: string
};

export const RoundedElements = (): React.ReactNode => 
  <section className={`wrapMainSocial flex flex-col items-center w-[10%] mb-3 mt-[44px]`}>
    {roundedElsIcons.map((props): React.ReactNode => {
      const { id, icon, img, link }: TRoundedEls = props;
      return img ?
        <RoundedButton key={id} id={id} img={img}/>
        : <RoundedLink key={id} id={id} link={link} icon={icon}/>
    })}
  </section>