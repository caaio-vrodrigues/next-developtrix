// Native
import React, { LegacyRef } from "react";

// Components
import { MainTitleCV } from "./content-comps/MainTitleCV";
import { PrincFerramCV } from "./content-comps/PrincFerramCV";
import { ProjetosCV } from "./content-comps/ProjetosCV";
import { ContatoCV } from "./content-comps/ContatoCV";
import { CompetenciasCV } from "./content-comps/CompetenciasCV";
import { BackEndCV } from "./content-comps/BackEndCV";
import { CursosExtraCV } from "./content-comps/CursosExtraCV";
import { FormMetasCV } from "./content-comps/FormMetasCV";
import { ExperienciasCV } from "./content-comps/ExperienciasCV";
import { TextoFinalCV } from "./content-comps/TextoFinalCV";

// styles-att
import { cvStylesAtt } from "@/data/curriculum/cv-styles";

type TCurriculum = {
  reference: LegacyRef<HTMLDivElement>
};

export const CVContent = ({ reference }: TCurriculum): React.ReactNode => {
  const { pIdent, font } = cvStylesAtt;

  return (
    <div ref={reference} style={font}
    className={`CVContent bg-white text-black p-[30px] pl-[50px] pr-[50px]`}>
      <MainTitleCV />
      <ContatoCV />
      <ProjetosCV />
      <FormMetasCV />
      <PrincFerramCV pIdent={pIdent}/>
      <CompetenciasCV pIdent={pIdent}/>
      <BackEndCV pIdent={pIdent}/>
      <CursosExtraCV />
      <ExperienciasCV />
      <TextoFinalCV />
    </div>
  );
};