// Native
import React from "react";

type TBaseLayout = {
  elements: React.ReactNode[]
};

export const BaseLayout = ({ elements }: TBaseLayout): React.ReactNode => 
  <div className={`baseLay flex`}>
    {elements.map((el) => <>{el}</>)}
  </div>