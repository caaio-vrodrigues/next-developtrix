// Native
import React, { ElementType } from 'react';

type TItemMenu = {
  icon: ElementType
  link: string
  col: boolean
};

export const ItemMenu = (props: TItemMenu): React.ReactNode => {
  const { icon: Icon, link, col } = props;

  return (
    <li className={`${col ? 'liMenuMobile text-center w-[100%]' : 'liMenu'}`}>
      <a href={link} target='blank' className={`flex justify-center items-center
      hover:text-zinc-300 rounded-lg`}>
        <Icon className={`${col ? 'iconMenuMobile' : 'iconMenu'} min-h-[30px]`}/>
      </a>
    </li>)
};

