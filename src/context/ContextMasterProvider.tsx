'use client';

// Native
import React, { createContext, useState, useEffect } from 'react';

type TContextMasterProvider = {
  children: React.ReactNode
};

type TContextMaster = {
  showMenuContact: boolean
  setShowMenuContact: (show: any) => void
  isActiveAccord: number
  setActiveAccord: (id: number) => void
  idCaroussel: number
  setIdCaroussel: (id: number) => void
  showHomeImportant: boolean
  setShowHomeImportant: (show: any) => void
  showCVModal: boolean
  setShowCVModal: (show: any) => void
};

const ContextMaster = createContext<TContextMaster>({
  showMenuContact: false,
  setShowMenuContact(){},
  isActiveAccord: 0,
  setActiveAccord(){},
  idCaroussel: 1,
  setIdCaroussel(){},
  showHomeImportant: false,
  setShowHomeImportant(){},
  showCVModal: false,
  setShowCVModal(){},
});

export default ContextMaster;

export function ContextMasterProvider({ 
  children 
}: TContextMasterProvider): React.ReactNode {
  const [showMenuContact, setShowMenuContact] = useState<boolean>(false);
  const [isActiveAccord, setActiveAccord] = useState<number>(0);
  const [idCaroussel, setIdCaroussel] = useState<number>(1);
  const [showHomeImportant, setShowHomeImportant] = useState<boolean>(false);
  const [showCVModal, setShowCVModal] = useState<boolean>(false);

  return (
    <ContextMaster.Provider value={{
      showMenuContact, setShowMenuContact,
      isActiveAccord, setActiveAccord,
      idCaroussel, setIdCaroussel,
      showHomeImportant, setShowHomeImportant,
      showCVModal, setShowCVModal,
    }}>
      {children}
    </ContextMaster.Provider>
  );
};