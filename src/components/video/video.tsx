import React from "react";
import { useVideoStore } from "@/utils/state";
import { BigPlay } from "@/components/bigPlay/bigPlay";
import { Dock } from "@/components/dock/dock";

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

  const { videoRef, setVideoDuration, setCurrentTime } = useVideoStore(
    (state) => ({
      videoRef: state.videoRef,
      setVideoDuration: state.setVideoDuration,
      setCurrentTime: state.setCurrentTime,
    }),
  );

  return (
    <div className="bp-videoContainer" style={videoSize}>
      <video
        ref={videoRef}
        className="bp-video"
        onTimeUpdate={() =>
          videoRef.current && setCurrentTime(videoRef.current.currentTime)
        }
        onLoadedMetadata={() =>
          videoRef.current && setVideoDuration(videoRef.current.duration)
        }
      >
        <source src={src} type="video/webm" />
        <source src={src} type="video/mp4" />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href="myVideo.mp4">link to the video</a> instead.
        </p>
      </video>
      <BigPlay />
      <Dock />
    </div>
  );
};
