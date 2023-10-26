import React from "react";

type VideoProps = {
  src: string;
  width?: string;
  height?: string;
  orientation?: "landscape" | "portrait";
};

export const VideoNative = ({
  src,
  width,
  height,
  orientation = "landscape",
}: VideoProps) => {
  const videoSize = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };
  return (
    <div
      className={`bp-videoContainer ${
        orientation === "portrait" ? "bp-videoContainer--portrait" : ""
      }`}
      style={videoSize}
    >
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
