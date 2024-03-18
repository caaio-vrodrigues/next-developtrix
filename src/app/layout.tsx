// Native
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import { useContext } from 'react';

// Styles
import './globals.css';
import '@/sass/index.scss';

// Context
import { ContextMasterProvider } from '@/context/ContextMasterProvider';

// Components
import { Background } from '@/components/utils/Background';
import { Header } from '@/components/home/header/Header';
import { Footer } from '@/components/home/footer/Footer';
import { CurriculumModal } from '@/components/utils/cv-modal/CurriculumModal';

const oswald: NextFont = Oswald({
  weight: '500',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevelopTrix',
  description: 'Desenvolvido por Cavio V. Rodrigues para exemplificar de forma prática meu conhecimento.',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {

  return (
    <html lang='pt-BR'>
      <body className={`bodyLay ${oswald.className} flex flex-col`}
      suppressHydrationWarning={true}>
        <ContextMasterProvider>
          <Background/>
          <Header font={oswald.className}/>
          <CurriculumModal/>
          {children}
          <Footer/>
        </ContextMasterProvider>
      </body>
    </html>)
};
