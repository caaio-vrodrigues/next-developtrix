// Native
import React from 'react';
import { Ubuntu } from 'next/font/google';

// Components
import { CardSkillInfos } from '@/components/pages/develop-infos/CardSkillInfos';
import { List } from '@/components/pages/develop-infos/List';

// Imgs
import cssImg from '@/imgs/develop-infos/icone-css.png';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
});

export default function CssInfos(): React.ReactNode{
  const lisContent = ['Responsividade', 'Media Query', 'SASS', 'Tailwind'];

  const descr = <p className={`text-justify indent-4 mt-5 ${ubuntu.className}`}>Para este projeto utilizei uma mesclagem entre css puro e tailwind, organizando e componentizando a estrutura de css com a ferramenta SASS. Dessa forma é possível implementar um sistema de responsividade com Media Query bem organizado e separado por componentes enquanto simultaneamente utilizo as classes do tailwind em casos específicos.</p>;

  return <CardSkillInfos img={cssImg} title='CSS 3' 
    list={<List lis={lisContent}/>} descr={descr}/>
};