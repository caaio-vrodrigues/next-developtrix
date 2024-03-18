'use client';

import { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size"; 

type TUseWRes = {
  size: number
};

export const useWResize = ({ size }: TUseWRes)=> {
  const wWidth = useWindowWidth();
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    if(screenSize < size && wWidth >= size){
      setScreenSize(wWidth);
    }
    if(screenSize > size && wWidth <= size){
      setScreenSize(wWidth);
    }
  }, [wWidth, screenSize, size]);

  return {
    screenSize,
  };
};