// Native 
import Image from "next/image";

// Imgs
import imgLogo from '@/imgs/header/matrix-oculos.png';

export const LogoWeb = () => <>
  <div className={`wrapLogoImg flex justify-center items-center w-[33.3%]`}>
    <Image src={imgLogo} alt={'Imagem de Logo'} className={`mt-3 mb-3`}/>
  </div>
  <h1 className={`flex justify-center items-center text-2xl
  md:text-3xl lg:text-4xl w-[33.3%]`}>DevelopTrix</h1>
</>