import { useVideoStore } from "../../utils/state";
import { Rangeslider } from "../rangeslider/rangeslider";
import { BigPlay } from "../controls/bigPlay";
import { Controls } from "../controls/controls";
import { RangeSliderNew } from "../rangesliderNew/rangesliderNew";

type AnalyzerProps = {
  src: string;
  width?: string;
  height?: string;
};

export const Analyzer = ({ src, width, height }: AnalyzerProps) => {
  const videoSize = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  const {
    videoRef,
    isMuted,
    isFlipped,
    setVideoDuration,
    setCurrentTime,
    togglePlay,
  } = useVideoStore((state) => ({
    videoRef: state.videoRef,
    isMuted: state.isMuted,
    isFlipped: state.isFlipped,
    setVideoDuration: state.setVideoDuration,
    setCurrentTime: state.setCurrentTime,
    togglePlay: state.togglePlay,
  }));

  return (
    <div className="analyzer" style={videoSize}>
      <div className="dock">
        <RangeSliderNew />
        <Controls />
      </div>
      <div className="video-container">
        <BigPlay />
        <video
          ref={videoRef}
          className={isFlipped ? "video video--flipped" : "video"}
          muted={isMuted}
          onTimeUpdate={() =>
            videoRef.current && setCurrentTime(videoRef.current.currentTime)
          }
          onLoadedMetadata={() =>
            videoRef.current && setVideoDuration(videoRef.current.duration)
          }
          onEnded={() => {
            togglePlay();
          }}
        >
          <source src={src} type="video/webm" />
          <source src={src} type="video/mp4" />
          <p>
            Your browser doesn't support HTML video. Here is a
            <a href="myVideo.mp4">link to the video</a> instead.
          </p>
        </video>
      </div>
    </div>
  );
};
