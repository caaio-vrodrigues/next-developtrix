'use client';

// Native
import { IconMenu2 } from '@tabler/icons-react';
import React, { ElementType, useEffect, useState } from 'react';

// Components
import { Menu } from './menu/Menu';
import { MenuHambg } from './mobile/MenuHambg';

// my-hooks
import { useWResize } from '@/hooks/useWResize';

export const HeaderMenu = () => {
  const iconHambg: ElementType = IconMenu2;
  const { screenSize } = useWResize({size: (768 - 17)})

  return <>
    {screenSize < (768 - 17) ? 
      <MenuHambg icon={iconHambg}/> 
      : <Menu col={false}/>}
  </>
};