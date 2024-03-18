// components
import { ImportantInfos } from "./ImportantIfos";
import { RoundedElements } from "@/components/utils/rounded-elements/RoundedElements";

// my-hooks
import { useWResize } from '@/hooks/useWResize';

export const Social = () => {
  const { screenSize } = useWResize({size: (371 - 17)});

  return screenSize < (371 - 17) ? <ImportantInfos/> : <RoundedElements/>
};