
// Components
import { WrapTopicCV } from "./WrapTopicCV";

type TPrincFerrats = {
  pIdent : { textIndent: string }
};

export const PrincFerramCV = ({ pIdent }: TPrincFerrats): React.ReactNode => 
  <WrapTopicCV>
    <h3 className={`font-bold text-[20px] text-center pb-[5px]`}>
      Principais Ferramentas
    </h3>
    <h4 className={`text-center text-[17px] mb-[5px] font-bold`}>
      Next-js 14, React-Js, Typescript, Javascript ES6+, CSS 3, HTML 5;
    </h4>
    <p className={`text-justify text-[17px] flex flex-wrap`} style={pIdent}>
      {`"Desde Agosto de 2022 venho estudando em tempo integral o desenvolvimento web full-stack. Após cerca de 6 meses explorando o back-end com PHP decidi me dedicar totalmente ao front-end e caminhar em direção ao full-stack percorrendo etapa por etapa deste processo para de fato adquirir todo o conhecimento necessário. Desde então busco me aperfeiçoar ao máximo principalmente no ecossistema Javascript/React.`}
    </p>
  </WrapTopicCV>