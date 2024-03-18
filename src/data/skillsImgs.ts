// Native
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// Imgs
import imgCss from '@/imgs/develop-infos/icone-css.png';
import imgHtml from '@/imgs/develop-infos/icone-html.png';
import imgJavascript from '@/imgs/develop-infos/icone-javascript.png';
import imgTypescript from '@/imgs/develop-infos/typescript.png';
import imgReact from '@/imgs/develop-infos/react-js.png';
import imgNext from '@/imgs/develop-infos/next-js.png';

type TSkillsIcons = {
  id: number, 
  img: StaticImport
}[];

export const skillsImgs: TSkillsIcons = [
  {
    id: 1, 
    img: imgReact
  },
  {
    id: 2, 
    img: imgNext
  },
  {
    id: 3, 
    img: imgJavascript
  },
  {
    id: 4, 
    img: imgTypescript
  },
  {
    id: 5, 
    img: imgCss
  },
  {
    id: 6, 
    img: imgHtml
  },
];