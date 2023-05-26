import { ThreeDots } from "react-loader-spinner"

interface ILoader {
    color?: string;
}

export const Loader = ({color} : ILoader) => {
  return (
    <>
        <div className="w-full flex items-center justify-center h-full">
            <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color={color || "#C271FF"} 
                ariaLabel="three-dots-loading"
                visible={true}
                />        
        </div>
    </>
  )
}
