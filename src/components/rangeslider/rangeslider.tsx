import ReactSlider, { ReactSliderProps } from "react-slider";
import * as Tooltip from "@radix-ui/react-tooltip";

import { useVideoStore } from "../../utils/state";

type RenderThumb = ReactSliderProps<number>["renderThumb"];
type RenderTrack = ReactSliderProps<number>["renderTrack"];

export const Rangeslider = () => {
  const {
    videoRef,
    isPlaying,
    currentTime,
    videoDuration,
    setBigPlayIconHidden,
  } = useVideoStore((state) => ({
    videoRef: state.videoRef,
    isPlaying: state.isPlaying,
    currentTime: state.currentTime,
    videoDuration: state.videoDuration,
    setBigPlayIconHidden: state.setBigPlayIconHidden,
  }));

  const Track: RenderTrack = (props, state) => {
    const indx = state.index;
    const trackCSS = isPlaying ? "track track--transition" : "track";
    return (
      <div
        {...props}
        className={indx === 1 ? trackCSS : "track track--active"}
      ></div>
    );
  };

  const Thumb: RenderThumb = (props, state) => {
    const thumbCSS = isPlaying ? "thumb thumb--transition" : "thumb";
    return (
      <div {...props} className={thumbCSS}>
        {state.valueNow}
      </div>
    );
  };

  const value = videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0;

  const handleChange = (v: number) => {
    setBigPlayIconHidden(true);
    if (videoRef.current) {
      const newTime = (v / 100) * videoDuration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <ReactSlider
      disabled={isPlaying}
      className="horizontalSlider"
      value={value}
      onChange={handleChange}
      onAfterChange={() => setBigPlayIconHidden(false)}
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};
