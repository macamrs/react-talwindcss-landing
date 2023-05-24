import { FC } from "react";

interface ISVGFill {
  color?: string;
  nextIndex?(): void;
};

export const ArrowRight : FC<ISVGFill> = ({ color, nextIndex }) => {
  return (
    <button onClick={nextIndex}>
        <svg fill={`${color || 'white'}`} width="30" height="64" viewBox="0 0 30 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.21975 63.1838L29.5225 31.8486L1.21975 0.513504L0.477648 1.18379L28.1747 31.8486L0.477648 62.5135L1.21975 63.1838Z" />
        </svg>
    </button>
  )
}
