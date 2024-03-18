// Native
import Link from "next/link";
import React from "react";

type TButtonLink = {
  link: string
  text: string
};

export const ButtonLink = (props: TButtonLink): React.ReactNode => {
  const { link, text } = props;

  return <Link className={`linkHome p-1 pl-3 pr-3 text-center rounded-lg font-bold`}
    href={link}>{text}</Link>
};