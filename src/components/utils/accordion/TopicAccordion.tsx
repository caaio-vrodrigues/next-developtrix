'use client';

// Native
import React, { useContext } from "react";
import { IconArrowBadgeUp, IconArrowBadgeDown} from '@tabler/icons-react';

// Context
import ContextMaster from "@/context/ContextMasterProvider";

type TTopicAccordion = {
  title: string
  text: string
  id: number
};

export const TopicAccordion = (props: TTopicAccordion): React.ReactNode => {
  const { title, text, id } = props;
  const {isActiveAccord, setActiveAccord} = useContext(ContextMaster);
  
  const interact = (id: number) => 
    id === isActiveAccord ? setActiveAccord(0) : setActiveAccord(id); 

  return(
    <article className={`flex flex-col justify-center items-center`}>
      <div className={`wrapTopicAccordion flex justify-between items-center 
      w-[100%] pt-2`} 
      onClick={() => interact(id)}>
        <h2 className={`p-3`}>{title}</h2>
        {id === isActiveAccord ? <IconArrowBadgeDown className={`mr-3`}/> 
          : <IconArrowBadgeUp className={`mr-3`}/>}
      </div>
      {id === isActiveAccord ? 
        <p className={`bg-zinc-400 text-black font-light w-[100%] p-3 
        indent-4`}>{text}</p> : null}
    </article>
  );
};