'use client';

// Native
import React, { useContext } from 'react';

// Context
import ContextMaster from '@/context/ContextMasterProvider';

// components
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { MenuOptions } from "./mobile/MenuOptions";

type THeaderUp = {
  font: string 
};

export const Header = ({ font }: THeaderUp) => {
  const { showMenuContact } = useContext(ContextMaster);

  return (
    <header className={`${font} fixed mb-auto flex flex-col justify-center 
    w-[100%] p-[2%]`}>
      <div className={`wrapLogoH1Menu flex w-[100%]`}>
        <HeaderLogo/>
        <HeaderMenu/>
      </div>
      {showMenuContact && <MenuOptions/>}
    </header>
  );
};
  