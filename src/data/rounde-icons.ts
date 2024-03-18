// Native
import { ElementType } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { 
  IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp, 
} from '@tabler/icons-react'; 

// Imgs
import cvIcon from '@/imgs/curriculum.png';

type TSocialIcons = {
  id: number 
  icon?: ElementType
  img?: StaticImport 
  link: string
}[];

export const roundedElsIcons: TSocialIcons = [
  {
    id: 1, 
    img: cvIcon,
    link: '',
  }, 
  {
    id: 2, 
    icon: IconBrandWhatsapp,
    link: 'https://wa.me/+5519997866670?text=wpp-caio',
  },
  {
    id: 3, 
    icon: IconBrandGithub,
    link: 'https://github.com/caaio-vrodrigues',
  }, 
  {
    id: 4, 
    icon: IconBrandLinkedin,
    link: 'https://www.linkedin.com/in/caio-programador/',
  },
];