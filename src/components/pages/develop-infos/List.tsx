// Native
import React from "react";

type TList = {
  lis: string[]
};

export const List = ({ lis }: TList): React.ReactNode => 
  <ul className={`listSkill list-disc list-inside`}>
    {lis.map((content, i) => 
      <li key={i} className='ml-4'>
        {content}
      </li>)}
  </ul>
