'use client';

// Native
import React, { useContext } from 'react';
import { 
  IconSquareRoundedArrowRight, IconSquareRoundedArrowLeft 
} from '@tabler/icons-react';

// Context
import ContextMaster from '@/context/ContextMasterProvider';

type TButtonCaroussel = {
  leng: number
  direction: string
};

export const ButtonCaroussel = (props: TButtonCaroussel): React.ReactNode => {
  const { leng, direction } = props;
  const { idCaroussel, setIdCaroussel } = useContext(ContextMaster);

  return (
    <button className={`z-49 cursor-pointer flex justify-center 
    items-center ml-5 mr-5`}
    onClick={() => setIdCaroussel(
      direction === 'left' ? 
        idCaroussel > 1 ? idCaroussel - 1 : leng 
      : idCaroussel < leng ? idCaroussel + 1 : 1
    )}>
      {direction === 'left' ? 
        <IconSquareRoundedArrowLeft className={`w-[50px] h-[50px]`}/> 
        : <IconSquareRoundedArrowRight className={`w-[50px] h-[50px]`}/>}
    </button>)
};