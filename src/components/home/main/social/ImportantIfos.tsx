'use client';

// Native
import React, { useContext } from 'react';
import { IconAlertCircleFilled} from '@tabler/icons-react'; 

// Context
import ContextMaster from '@/context/ContextMasterProvider';

// Components
import { ImportantRoundedEls } from '@/components/utils/rounded-elements/ImportantRoundedEls';

export const ImportantInfos = (): React.ReactNode => {
  const {showHomeImportant, setShowHomeImportant} = useContext(ContextMaster);

  return (
    <section className={`wrapHomeImportant flex flex-col w-[96%]`}>
      <button onClick={() => setShowHomeImportant((show: boolean) => !show)}>
        <IconAlertCircleFilled/>
      </button>
      {showHomeImportant && <ImportantRoundedEls/>}
    </section>
  );
};