// Native
import React from "react";

// Components
import { WrapTopicCV } from "./WrapTopicCV";

export const FormMetasCV = (): React.ReactNode => 
  <WrapTopicCV>
    <div className="mt-[10px]">
      <h3 className={`font-bold text-[20px] text-center pb-[5px]`}>
        Formação
      </h3>
      <p className={`text-justify text-[17px] mb-[5px] flex flex-wrap 
      font-bold`}>
        Análise e Desenvolvimento de Sistemas - Cursando 
      </p>
      <p className={`text-justify text-[17px] mb-[5px] flex flex-wrap`}>
        RA: 2431014 - Faculdade Multivix
      </p>
    </div>
  </WrapTopicCV>