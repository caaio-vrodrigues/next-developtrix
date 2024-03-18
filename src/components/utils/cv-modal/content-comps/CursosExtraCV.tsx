// Native
import React from "react";

// Components
import { WrapTopicCV } from "./WrapTopicCV";

export const CursosExtraCV = (): React.ReactNode => 
  <WrapTopicCV>
    <ul className={`list-disc`}>
      <li className={`ml-[20px]`}>
        <h4 className={`text-justify text-[17px] flex flex-wrap font-bold
        mt-[10px]`}>
          {`Conhecimento em Word e Excel`}
        </h4>
      </li>
      <li className={`ml-[20px]`}>
        <h4 className={`text-justify text-[17px] flex flex-wrap font-bold
        mt-[10px]`}>
          {`Inglês - Avançado`}
        </h4>
        <p className={`text-justify text-[17px] flex flex-wrap`}>
          {`Grande parte dos meus projetos são desenvolvidos totalmente em inglês, também realizo cursos de programação em inglês e possuo um bom listening. Atingir a fluência até 2025 está na lista dos meus objetivos principais.`}
        </p>
      </li>
      <li className={`ml-[20px]`}>
        <h4 className={`text-justify text-[17px] flex flex-wrap font-bold
        mt-[10px]`}>
          {`Treinamento - ISO 27001 Foundation Information Security Management`}
        </h4>
      </li>
    </ul>
  </WrapTopicCV>