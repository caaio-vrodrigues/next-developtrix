// Native
import React from 'react';
import Link from 'next/link';

type TCardDevSkill = {
  title: string
  url: string
};

export const CardDevSkill = ({ title, url }: TCardDevSkill): React.ReactNode => {
  return (
    <article className={`cardDevSkill flex flex-col justify-center items-center 
    border bg-black border-none p-5 m-5 rounded-lg w-[35vw]`}>
      <h1 className={`mb-[20px]`}>{title}</h1>
      <Link href={url}>Infos</Link>
    </article>)
};