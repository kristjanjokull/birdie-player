import "../../styles/styles.css";

import { FC } from "react";

import { Theme } from "../../utils/state";
import { Analyzer } from "../analyzer/analyzer";

type VideoProps = {
  src: Array<string>;
  colorTheme?: Theme;
  width?: string;
  height?: string;
};

export const Video: FC<VideoProps> = ({ src, width, height }) => {
  return (
    <>
      {src.length === 1 && (
        <Analyzer src={src[0]} width={width} height={height} />
      )}
      {src.length === 2 && (
        <>
          <Analyzer src={src[0]} width={width} height={height} />
          <Analyzer src={src[1]} width={width} height={height} />
        </>
      )}
    </>
  );
};
