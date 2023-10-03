import { useVideoStore } from "../../utils/state";
import { Controls } from "../controls/controls";
import { FullScreen } from "../fullscreen/fullscreen";
import { Rangeslider } from "../rangeslider/rangeslider";
import { SoundToggler } from "../soundToggler/soundToggler";
import { VideoFlip } from "../videoFlip/videoFlip";
import { TimeIndicator } from "../controls/timeIndicator";

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

  const { videoRef, isMuted, isFlipped, setVideoDuration, setCurrentTime } =
    useVideoStore((state) => ({
      videoRef: state.videoRef,
      isMuted: state.isMuted,
      isFlipped: state.isFlipped,
      setVideoDuration: state.setVideoDuration,
      setCurrentTime: state.setCurrentTime,
    }));

  return (
    <div className="analyzer" style={videoSize}>
      <div className="dock">
        <Rangeslider />
        <div className="controls">
          <div className="controls__items">
            <Controls variant="play" />
            <Controls variant="time" />
            <TimeIndicator />
          </div>
          <div>
            <SoundToggler />
            <VideoFlip />
            <FullScreen />
          </div>
        </div>
      </div>
      <div className="video-container">
        <Controls variant="big-play" />
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
