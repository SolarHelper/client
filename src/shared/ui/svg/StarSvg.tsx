import * as React from "react";
interface SvgProps {
  fill?: string;
}
const StarSvg = ({ fill }: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
  >
    <path
      fill="black"
      stroke="none"
      d="M16.463 7.01 12.476 9.9l1.558 4.672a.779.779 0 0 1-.744 1.019.779.779 0 0 1-.455-.147l-4.018-2.881-3.987 2.896a.78.78 0 0 1-1.2-.872l1.558-4.672L1.17 7.011a.779.779 0 0 1 .46-1.41h4.92L8.108.93a.779.779 0 0 1 1.48 0l1.557 4.672h4.921a.778.778 0 0 1 .46 1.41h-.063Z"
    />
  </svg>
);
export default StarSvg;
