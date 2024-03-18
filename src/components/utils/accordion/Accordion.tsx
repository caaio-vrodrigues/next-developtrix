// Native
import React from "react";

// Components
import { TopicAccordion } from "./TopicAccordion";
<a href=""></a>
// Data
import { accordionData } from "@/data/accordion-data";

export const Accordion = (): React.ReactNode => 
  <section className={`accordionHome`}>
    {accordionData.map((topic) =>( 
      <TopicAccordion key={topic.id} id={topic.id} title={topic.title} 
        text={topic.text}/>))}
  </section>