// Native
import React from "react";

// Data
import { cvContatoInfos } from "@/data/curriculum/cv-contato-infos";

// Components
import { WrapTopicCV } from "./WrapTopicCV";

export const ContatoCV = (): React.ReactNode => 
  <WrapTopicCV>
    <h3 className={`font-bold text-[20px] text-center pb-[5px]`}>
      Informações Pessoais
    </h3>
    {cvContatoInfos.map(({ id, text, title }) => 
      <div key={id} className={`flex justify-start w-[100%]`}>
        <h4 className={`text-justify text-[17px] flex font-bold
        flex-wrap`}>
          {title}:
        </h4>
        <p className={`text-justify text-[17px] flex flex-wrap ml-[5px]`}>
          {text}
        </p>
      </div>
    )}
  </WrapTopicCV>

  
  