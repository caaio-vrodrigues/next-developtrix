// Native
import React from 'react';
import Image from 'next/image';

// Imgs
import imgLogo from '@/imgs/header/matrix-oculos.png';

export const LogoMobile = (): React.ReactNode => <>
  <div className={`wrapLogoMobile flex justify-center items-center w-[66.6%]`}>
    <h1 className={`h1TitleMobile`}>DevelopTrix</h1>
    <div className={`flex justify-center items-center`}>
      <Image src={imgLogo} alt={'Imagem Logo'}
      className={`imgLogoTrixMobile mt-3 mb-3`}/>
    </div>
  </div>
</>
