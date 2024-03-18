// Native
import React from 'react';
import { Ubuntu } from 'next/font/google';

// Components
import { CardSkillInfos } from '@/components/pages/develop-infos/CardSkillInfos';
import { List } from '@/components/pages/develop-infos/List';

// Imgs
import imgHtml from '@/imgs/develop-infos/icone-html.png';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
});

export default function HtmlInfos(): React.ReactNode {
  const lisContent = ['Html semântico', 'SEO'];

  const descr = <p className={`text-justify indent-4 mt-5 ${ubuntu.className}`}>Um site otimizado deve estar obrigatoriamente desenvolvido com seu html semântico. Isso possibilitará que as tecnologias utilizadas para encontrar este site terão as informações e recursos necessários para concluir a busca, para isso deve-se dar grande importância ao SEO - Search Engine Optimization.</p>;

  return <CardSkillInfos img={imgHtml} title='HTML 5' list={<List lis={lisContent}/>} descr={descr}/>
};