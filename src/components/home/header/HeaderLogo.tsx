'use client';

// Components
import { useEffect, useState } from 'react';
import { LogoMobile } from './mobile/LogoMobile';
import { LogoWeb } from './LogoWeb';

// my-hooks
import { useWResize } from '@/hooks/useWResize';

export const HeaderLogo = () => {
  const { screenSize } = useWResize({ size: (451 - 17)});

  if(screenSize < (451 - 17)){
    return <LogoMobile/>
  };
  return <LogoWeb/>
};