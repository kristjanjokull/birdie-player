import React from "react";

type VideoProps = {
  src: string;
  width?: string;
  height?: string;
};

export const VideoNative = ({ src, width, height }: VideoProps) => {
  const videoSize = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };
  return (
    <div className="bv-videoContainer" style={videoSize}>
      <video className="bv-video" controls>
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
