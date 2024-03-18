'use client';

// Native
import Image from "next/image";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { useContext } from "react";

// context
import ContextMaster from "@/context/ContextMasterProvider";

type TRoundedLink = {
  id: Number
  img?: StaticImport
};

export const RoundedButton = ({ img }: TRoundedLink): React.ReactNode => {
  const { setShowCVModal } = useContext(ContextMaster);
  
  return (
    <button onClick={() => setShowCVModal((show: boolean) => !show)} 
    className={`roundedEl hover:text-white`}>
      {img && <Image priority alt="Símbolos das redes sociais mais utilizadas." 
        src={img} className={`imgRounded`}/>}
    </button>)
};