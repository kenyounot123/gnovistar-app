import * as React from "react";
type HexColor = `${string}${string}${string}${string}${string}${string}`;
type width = `${number}${number}`
type height = `${number}${number}`
interface SvgLogoProps {
  color?: HexColor;
  width: width;
  height: height;
  className?: string;
}

const SvgLogo = ({width, height, color, className}:SvgLogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}.000000pt`}
    height={`${height}.000000pt`}
    viewBox="0 0 50.000000 50.000000"
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g
      transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
      fill={`#${color}`}
      stroke="none"
    >
      <path d="M79 431 l-29 -29 0 -157 0 -157 29 -29 29 -29 142 0 142 0 29 29 29 29 0 157 0 157 -29 29 -29 29 -142 0 -142 0 -29 -29z m331 -11 c18 -18 20 -33 20 -140 0 -164 4 -160 -180 -160 -184 0 -180 -4 -180 160 0 164 -4 160 180 160 127 0 142 -2 160 -20z m-160 -320 c106 0 140 3 158 16 21 14 22 14 22 -5 0 -12 -9 -30 -20 -41 -18 -18 -33 -20 -160 -20 -127 0 -142 2 -160 20 -11 11 -20 29 -20 41 0 19 1 19 22 5 18 -13 52 -16 158 -16z" />
      <path d="M206 344 c-21 -20 -30 -58 -22 -88 9 -37 34 -56 71 -56 36 0 65 28 65 62 0 14 -8 18 -36 18 -21 0 -33 -4 -29 -10 3 -5 15 -10 26 -10 10 0 19 -4 19 -9 0 -17 -29 -32 -57 -29 -57 6 -57 110 1 116 16 2 36 -4 47 -14 25 -22 33 -14 13 14 -18 26 -75 30 -98 6z" />
    </g>
  </svg>
);
export default SvgLogo;