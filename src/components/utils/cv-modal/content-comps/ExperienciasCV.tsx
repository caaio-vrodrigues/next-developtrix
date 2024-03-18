// Native
import React from "react";

// Data
import { cvExperiencias } from "@/data/curriculum/cv-experiencias";

// Components
import { WrapTopicCV } from "./WrapTopicCV";

export const ExperienciasCV = (): React.ReactNode => 
  <WrapTopicCV>
    <h3 className={`font-bold text-[20px] text-center pb-[5px]`}>
      Experiências
    </h3>
    <ul className={`list-disc`}>
      {cvExperiencias.map(({id, text, title}) => 
        <li key={id} className={`ml-[20px]`}>
          <h4 className={`text-justify text-[17px] flex font-bold
          flex-wrap mt-[10px]`}>
            {title}
          </h4>
          <p className={`text-justify text-[17px] flex flex-wrap`}>
            {text}
          </p>
        </li>)}
    </ul>
  </WrapTopicCV>