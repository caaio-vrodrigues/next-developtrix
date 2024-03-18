// Native
import React from "react";

// Components
import { WrapTopicCV } from "./WrapTopicCV";

type TBackEndCV = {
  pIdent : { textIndent: string }
};

export const BackEndCV = ({ pIdent }: TBackEndCV): React.ReactNode => 
  <WrapTopicCV>
    <h3 className={`font-bold text-[20px] text-center pb-[5px]`}>Back-End</h3>
    <h4 className={`text-center text-[17px] mb-[5px] flex flex-wrap font-bold`}>
      {`PHP, SQL, Banco de Dados, MySql, SqlServer, Java, Firebird, Delphi, Modelagem de Dados, UML, BR Modelo;`}
    </h4>
    <p className={`text-justify text-[17px] flex flex-wrap`} style={pIdent}>
      {`"Como citado anteriormente, tenho como foco principal o desenvolvimento web front-end, porém o que me incentivou inicialmente a entrar no universo da programação foi a manipulação de bancos de dados durante aulas na faculdade. Com isso decidi deixar o back-end momentâneamente de lado apenas para dominar o front e assim que estiver pronto ou for necessário por conta de algum trabalho voltar para o back-end, de preferência com Node-JS para complementar o ecossistema React/Next-JS que venho trabalhando no front.”`}
    </p>
  </WrapTopicCV>