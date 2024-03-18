
// Native
import { useReactToPrint } from 'react-to-print';
import React, { useRef } from 'react';

// Components
import { CVContent } from './CVContent';
import { CVIcons } from './CVIcons';

type TCurriculum = {
  setShowCVModal: (show: any) => void
};

export const CurriculumPdfPrint = ({ setShowCVModal }: TCurriculum): React.ReactNode => {
  const targetCV = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => targetCV.current,
  });

  return(
    <section className={`wrapCV flex flex-col bg-black rounded-md`}>
      <CVIcons handlePrint={handlePrint} setShowCVModal={setShowCVModal}/>
      <CVContent reference={targetCV}/>
    </section>
  );
};