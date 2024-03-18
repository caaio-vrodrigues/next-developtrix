'use client';

// Native
import React, { useContext } from "react";

// Context
import ContextMaster from "@/context/ContextMasterProvider";

// Components
import { CurriculumPdfPrint } from "./CurriculumPdfPrint";

export const CurriculumModal = (): React.ReactNode => {
  const { showCVModal, setShowCVModal } = useContext(ContextMaster);

  return <>{showCVModal && 
    <div className={`bgModalCV h-screen w-[100%]`}>
      <CurriculumPdfPrint setShowCVModal={setShowCVModal}/>
    </div>}
  </>
};