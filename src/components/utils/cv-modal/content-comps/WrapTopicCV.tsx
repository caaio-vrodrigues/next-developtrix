// Native
import React from "react";

type TWrapTopicCV = {
  children: React.ReactNode
};

export const WrapTopicCV = ({ children }: TWrapTopicCV): React.ReactNode => 
  <article style={{ borderBottom: '1px solid black'}} 
  className={`flex flex-col justify-center pb-[10px] mb-[20px]`}>
    {children}
  </article>
  