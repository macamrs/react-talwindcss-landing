import { FC } from "react";

interface ISVGFill {
  color?: string;
  previousIndex?(): void;
};

export const ArrowLeft: FC<ISVGFill> = ({ color, previousIndex }) => {
  return (
    <button onClick={previousIndex}>
        <svg fill={`${color || 'white'}`} width="30" height="64" viewBox="0 0 30 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.7803 63.1838L0.4776 31.8486L28.7803 0.513504L29.5224 1.18379L1.82536 31.8486L29.5224 62.5135L28.7803 63.1838Z" />
        </svg>
    </button>
  )
}