'use client';

// Native
import React, { useContext } from 'react';
import { Ubuntu } from 'next/font/google';

// components
import { MainAccordCarrous } from './MainAccordCarrous';
import { AccesPageDevSkills } from './AccesPageDevSkills';
import { Social } from './social/Social';
// import { CVModal } from '@/components/utils/cv-modal/CVModal';

//context
import ContextMaster from '@/context/ContextMasterProvider';

const ubuntu = Ubuntu({
  weight: '300',
  subsets: ['latin'],
});

export const MainHome = () =>
      <main className={`${ubuntu.className} mainHomeUp text-justify flex m-[2%]`}>
        <Social/>
        <MainAccordCarrous/>
        <AccesPageDevSkills/>
      </main>