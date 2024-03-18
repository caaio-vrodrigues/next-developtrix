// Native
import { IconFileTypePdf, IconSquareX } from '@tabler/icons-react'; 

type TCVIcons = {
  handlePrint: any
  setShowCVModal: (show: any) => void
};

export const CVIcons = ({ handlePrint, setShowCVModal }: TCVIcons) => 
  <div className={`w-[100%]`}>
    <span className={`flex justify-end`}>
      <IconSquareX onClick={() => setShowCVModal((show: boolean) => !show)}
      className={`CVIcons IconX cursor-pointer w-[34px] h-[34px]`}/>
    </span>
    <span className={`flex justify-center items-center`}>
      <IconFileTypePdf onClick={handlePrint}
      className={`CVIcons cursor-pointer w-[100px] h-[150px]`}/>
    </span>
  </div>