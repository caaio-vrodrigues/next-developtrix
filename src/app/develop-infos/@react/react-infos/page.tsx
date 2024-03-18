// Native
import React from 'react';
import { Ubuntu } from 'next/font/google';

// Components
import { CardSkillInfos } from '@/components/pages/develop-infos/CardSkillInfos';
import { List } from '@/components/pages/develop-infos/List';

// Imgs
import reactImg from '@/imgs/develop-infos/react-js.png';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
});

export default function ReactInfos(): React.ReactNode{
  const lisContent = [
    'Componentização', 
    'Hooks',
    'Use State-Callback-Reducer-Effect-Ref',
    'Memo e useMemo',
    'Hooks personalizados',
    'Props', 
    'Context',
    'Axios',
    'Styled Components',
    'Theme',
    'Css Module',
  ];

  const descr = <p className={`text-justify indent-4 mt-5 ${ubuntu.className}`}>Citado como lib ou framework, o React-JS é a lib de desenvolvimento front-end mais utilizada no mundo, com o React-JS torna-se muito mais fácil a aplicação do conceito de SPA devido a sua característica de reagir sempre que determinado componente sofrer alterações, atualizando-o sem afetar o restante da página. Devido a este benefício e muitos outros como, por exemplo, a utilização de hooks, props e a instalação de libs de auxílio como axios ou react-to-print, decidi escolher o React-JS como minha base inicial de trabalho.</p>;

  return <CardSkillInfos img={reactImg} title='React-JS' list={<List lis={lisContent}/>} 
    descr={descr}/>
};