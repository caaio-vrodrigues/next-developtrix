// Native
import React from 'react';
import { Ubuntu } from 'next/font/google';

// Components
import { CardSkillInfos } from '@/components/pages/develop-infos/CardSkillInfos';

// Imgs
import typeImg from '@/imgs/develop-infos/typescript.png';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
});

export default function TypescriptInfos(): React.ReactNode{
  const descr = <p className={`text-justify indent-4 mt-5 ${ubuntu.className}`}>Desenvolver um código devidamente tipado é sem dúvida um dos melhores antídotos para evitar possíveis bugs no sistema, com este recurso é possível especificar exatamente qual será o tipo de dado aceito para determinada situação. Outra vantagem muito importante que a tipagem de dados proporciona são as sugestões das propriedades que deverão ser preenchidas com tais dados ao utilizar determinada função.</p>;

  return <CardSkillInfos img={typeImg} title='Typescript' descr={descr}/>
};