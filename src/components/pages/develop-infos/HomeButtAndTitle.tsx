import { ButtonLink } from '@/components/utils/ButtonLink';

type THomeButTitl = {
  fontOsw: string
};

export const HomeButtAndTitle = ({ fontOsw }: THomeButTitl) => 
<div className={`wrapTitAndButtPageDevSkills flex w-[100%]`}>
  <span className={`w-[33.3%] pl-[15px] mt-[20px]`}>
    <ButtonLink link='/' text='Home'/>
  </span>
  <h1 className={`${fontOsw} text-center w-[33.3%]`}>
    Developer Skills
  </h1>
</div>