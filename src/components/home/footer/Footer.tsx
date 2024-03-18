
// components
import { IconH1Foot } from "./IconH1Foot";
import { CreditsFoot } from "./CreditsFoot";
import { SocialFoot } from "./SocialFoot";

export const Footer = () => 
  <footer className={`flex flex-col justify-center items-center p-10 mt-auto`}>
    <IconH1Foot/>
    <div className={`wrapCredtsSocialFoot flex w-[100%]`}>
      <CreditsFoot/>
      <SocialFoot/>
    </div>
  </footer>