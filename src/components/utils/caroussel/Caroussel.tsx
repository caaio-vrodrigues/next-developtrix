// Components
import { TopicCaroussel } from "./TopicCaroussel";

// Imgs
import { skillsImgs } from "@/data/skillsImgs";

export const Caroussel = () => 
  <section className={`secCaroussel flex justify-center pt-[15px] pb-[15px] 
  mb-[40px]`}>
    <TopicCaroussel topics={skillsImgs}/>
  </section>