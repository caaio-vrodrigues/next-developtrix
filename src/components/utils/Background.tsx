// Native
import Image from 'next/image';
import { ReactElement } from 'react';

// Imgs
import bgImg from '@/imgs/bg-developtrix.jpg';

export const Background = (): ReactElement => 
  <Image priority alt='Imagem de background com tema matrix' src={bgImg}
  className={`imgBackg -z-50 opacity-40 object-cover fixed h-screen`}/>