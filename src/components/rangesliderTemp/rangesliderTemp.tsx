import * as Slider from "@radix-ui/react-slider";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useVideoStore } from "../../utils/state";

export const RangesliderTemp = () => {
  const { currentTime, videoRef, videoDuration } = useVideoStore((state) => ({
    currentTime: state.currentTime,
    videoRef: state.videoRef,
    videoDuration: state.videoDuration,
  }));

  const handleChange = (v: number[]) => {
    if (videoRef.current) {
      const newTime = (v[0] / 100) * videoDuration;
      videoRef.current.currentTime = newTime;
    }
  };

  const value = videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0;

  return (
    <Slider.Root
      className="SliderRoot"
      //defaultValue={[value]}
      value={[value]}
      step={0.01}
      max={100}
      onValueChange={handleChange}
    >
      <Slider.Track className="SliderTrack">
        <Slider.Range className="SliderRange" />
      </Slider.Track>
      <Tooltip.Provider>
        <Tooltip.Root open>
          <Tooltip.Trigger asChild>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" sideOffset={5}>
              {currentTime.toFixed(2)}
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Slider.Root>
  );
};
