import React from "react";
import { BigPlay } from "@/components/bigPlay/bigPlay";

type VideoProps = {
  src: string;
  width?: string;
  height?: string;
};

export const Video = ({ src, width, height }: VideoProps) => {
  const videoSize = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };
  return (
    <div className="bp-videoContainer" style={videoSize}>
      <BigPlay />
      <video className="bp-video" controls>
        <source src={src} type="video/webm" />
        <source src={src} type="video/mp4" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href="myVideo.mp4">link to the video</a> instead.
        </p>
      </video>
    </div>
  );
};
