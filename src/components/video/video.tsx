import React from "react";

type VideoProps = {
  src: string;
};

export const Video = ({ src }: VideoProps) => {
  return (
    <div className="bv-videoContainer">
      <video className="bv-video">
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
