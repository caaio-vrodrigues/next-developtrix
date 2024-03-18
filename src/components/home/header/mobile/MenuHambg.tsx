'use client';

// Native
import React, { ElementType, useContext } from 'react';

// Context
import ContextMaster from '@/context/ContextMasterProvider';

type TMenuHambg = {
  icon: ElementType
};

export const MenuHambg = ({ icon: Icon }: TMenuHambg): React.ReactNode => {
  const { setShowMenuContact } = useContext(ContextMaster);

  return (
    <div className={`menuHamburg md:hidden flex justify-center items-center 
    w-[33.3%]`}>
      <button onClick={() => setShowMenuContact((show: boolean) => !show)}>
        <Icon/>
      </button>
    </div>
  );
};