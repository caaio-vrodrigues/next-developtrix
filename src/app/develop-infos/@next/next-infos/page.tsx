// Native
import React from 'react';
import { Ubuntu } from 'next/font/google';

// Components
import { CardSkillInfos } from '@/components/pages/develop-infos/CardSkillInfos';
import { List } from '@/components/pages/develop-infos/List';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
});

// Imgs
import cssImg from '@/imgs/develop-infos/next-js.png';

export default function NextInfos(): React.ReactNode{
  const lisContent = [
    'Rotas dinâmicas', 
    'Rotas paralelas', 
    'Interceptação de Rotas', 
    'Middleware',
    'Url Params',
    'Página de erro nativa',
    'Página de Loading nativa',
    'Metadata dinâmico',
  ];
  
  const descr = <p className={`text-justify indent-4 mt-5 ${ubuntu.className}`}>Como indicado na própria doc do React-JS, a utilização principalmente do Next-JS ou algum outro framework que seja capaz de lidar com carregamentos de páginas como o Vite, por exemplo, é fundamental para que o React possa atuar de forma otimizada.</p>
  
  return <CardSkillInfos img={cssImg} title='NEXT-JS 14' list={<List lis={lisContent}/>} 
    descr={descr}/>
};