// Native
import React from 'react';

// Data
import { menuInfos } from '@/data/menu-infos-data';
import { socialIcons } from '@/data/social-icons';

// Components
import { ItemMenu } from './ItemMenu';

type TMenu = {
  col: boolean
};

export const Menu = ({ col }: TMenu): React.ReactNode => 
  <menu className={`${col ? 'menuMobile flex-col w-[100%]' : 'justify-around w-[33.3%]'}
  z-50 flex justify-center items-center`}>
    <ul className={`flex ${col ? 'flex-col w-[100%] mt-2' : 'justify-around'} items-center`}>
      {menuInfos.map(item => {
        const mediaIcon = socialIcons.filter(icon => icon.id === item.id && icon);
        return (
          <ItemMenu key={item.mediaName} col={col ? true : false} icon={mediaIcon[0].icon}
          link={item.link}/>
        );
      })}
    </ul>
  </menu>
  
