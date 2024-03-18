// Native
import React from "react";

// Components
import { WrapTopicCV } from "./WrapTopicCV";

export const ProjetosCV = (): React.ReactNode => 
  <WrapTopicCV>
    <h3 className={`font-bold text-[20px] text-center pb-[5px]`}>Projetos</h3>
    <div className={`flex justify-start w-[100%]`}>
      <h4 className={`text-justify text-[17px] flex flex-wrap font-bold`}>
        Projeto Principal:
      </h4>
      <p className={`text-justify text-[17px] flex flex-wrap 
      text-decoration-line: underline ml-[5px]`}>
        {`https://next-developtrix.vercel.app`}
      </p>
    </div>
    <div className={`flex justify-start w-[100%]`}>
      <h4 className={`text-justify text-[17px] font-bold flex flex-wrap`}>
        Demais Projetos:
      </h4>
      <p className={`text-justify text-[17px] flex flex-wrap 
      text-decoration-line: underline ml-[5px]`}>
        {`https://github.com/caaio-vrodrigues`}
      </p>
    </div>
  </WrapTopicCV>