// Native
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type TCardDevSkill = {
  img: StaticImport
  title: string
  list?: React.ReactNode
  descr: React.ReactNode
};

export const CardSkillInfos = (props: TCardDevSkill): React.ReactNode => {
  const { img, title, list, descr } = props;
  
  return (
    <article className={`cardDevSkill flex flex-col justify-center items-center 
    border bg-black border-none p-5 m-5 rounded-lg`}>
      <Image alt='Símbolos das linguagens de programação.' src={img}/>
      <h1 className={`mt-1 mb-5`}>{title}</h1>
      {list}
      {descr}
      <Link href='/develop-infos' className={`mt-5`}>Voltar</Link>
    </article>)
};