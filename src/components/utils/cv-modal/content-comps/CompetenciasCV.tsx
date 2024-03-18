// Native
import React from "react";

// Data
import { cvCompetencias } from "@/data/curriculum/cv-competencias";

// Coponents
import { WrapTopicCV } from "./WrapTopicCV";

type TCompetenciasCV = {
  pIdent : { textIndent: string }
};

export const CompetenciasCV = ({ pIdent }: TCompetenciasCV): React.ReactNode => 
  <WrapTopicCV>
    <h3 className={`font-bold text-[20px] text-center pb-[5px]`}>
      Competências
    </h3>
    <ul className={`ulCompCV list-disc`}>
      {cvCompetencias.map(({ id, title, text }) => 
        <li key={id} className={`ml-[20px]`}>
          <h4 className={`text-justify text-[17px] flex font-bold
          flex-wrap mt-[10px]`}>
            {title}
          </h4>
          <p className={`text-justify text-[17px] flex flex-wrap`}>
            {text && text}
          </p>
        </li>)}
    </ul>
    <p className={`text-justify text-[17px] flex flex-wrap mt-[10px]`} 
    style={pIdent}>{`"Utilizando as ferramentas descritas a cima e outras extensões do ecossistema Javascript/React/Next pude concluir que uma aplicação front-end que possibilita uma experiência agradável ao cliente presa por objetivos como: responsividade, padronização de estrutura de código, segurança, atualização constante, componentização e reaproveitamento de código resultando em uma aplicação mais leve, entre outros diversos fatores que fazem toda diferença na fluidez e manutenção da aplicação."`}</p>
  </WrapTopicCV>