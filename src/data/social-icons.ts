// Native
import { ElementType } from 'react';
import { 
  IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp, 
  IconBrandInstagram, IconBrandFacebook
} from '@tabler/icons-react'; 

type TSocialIcons = {
  id: number, 
  icon: ElementType, 
}[];

export const socialIcons: TSocialIcons = [
  {
    id: 1, 
    icon: IconBrandLinkedin
  }, 
  {
    id: 2, 
    icon: IconBrandGithub
  }, 
  {
    id: 3, 
    icon: IconBrandWhatsapp
  }, 

  {
    id: 4, 
    icon: IconBrandInstagram
  }, 
  {
    id: 5, 
    icon: IconBrandFacebook
  },
];