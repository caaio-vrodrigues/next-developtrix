// Native
import React, {useContext} from 'react';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Oswald } from 'next/font/google';

// Components
import { BaseLayout } from '@/components/pages/develop-infos/BaseLayout';
import { HomeButtAndTitle } from '@/components/pages/develop-infos/HomeButtAndTitle';

const oswald: NextFont = Oswald({
  weight: '500',
  subsets: ['latin'],
});

export default function DevelopInfosLayout({
  children, css, html, javascript, 
  next, react, typescript
}: Readonly<{
  children: React.ReactNode;
  css: React.ReactNode;
  html: React.ReactNode;
  javascript: React.ReactNode;
  next: React.ReactNode;
  react: React.ReactNode;
  typescript: React.ReactNode;
}>): React.ReactNode {

  const el1 = [react, next];
  const el2 = [javascript, typescript];
  const el3 = [css, html];
  
  
  return (
    <main className={`mainDevSkills flex flex-col flex-wrap justify-center 
    items-center overflow-x-hidden`}>
      <HomeButtAndTitle fontOsw={oswald.className}/>
      <BaseLayout elements={el1}/>
      <BaseLayout elements={el2}/>
      <BaseLayout elements={el3}/>
      {children}
    </main>
  )
};