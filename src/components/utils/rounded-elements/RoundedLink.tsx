// Native
import React, { ElementType } from 'react';

type TRoundedLink = {
  id: number
  icon?: ElementType
  link: string
};

export const RoundedLink = (props: TRoundedLink): React.ReactNode => {
  const {id, link, icon: Icon } = props;

  return(
    <a href={link} target="blank" className={`roundedEl 
    hover:text-white`}>
      {Icon && <Icon className={`h-[35px] w-[35px]`}/>}
    </a>)
};