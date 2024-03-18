// Native
import React from 'react';
import { Ubuntu } from 'next/font/google';

// Components
import { CardSkillInfos } from '@/components/pages/develop-infos/CardSkillInfos';
import { List } from '@/components/pages/develop-infos/List';

// Imgs
import javascriptImg from '@/imgs/develop-infos/icone-javascript.png';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
});

export default function JavascriptInfos(): React.ReactNode{
  const lisContent = [
    'Padrão Factory - IIFE', 'API - Fetch - Json', 'DOM', 'Sanitização', 
    'Storage', 'Orientação a Objeto', 'SPA', 'Modularização'
  ];

  const descr = <p className={`text-justify indent-4 mt-5 ${ubuntu.className}`}>Sendo a base principal para qualquer desenvolvedor front-end, um site ou sistema que rode com javascript puro de forma otimizada deve dar grande atenção para os itens citados na lista acima, no entanto, desenvolver com js puro se tornou algo praticamente obsoleto, pois tecnologias como React, Angular, Vue e muitas outras possibilitam que o desenvolvimento e o desempenho do sistema seja muito mais eficiente e aprimorado.</p>;

  return <CardSkillInfos img={javascriptImg} title='Javascript ES6+' list={<List lis={lisContent}/>} 
    descr={descr}/>
};