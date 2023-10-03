import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { ForwardIcon } from "../icons/forward";
import { PauseIcon } from "../icons/pause";
// import { PlayIcon } from "../icons/play";
import { PlayTempIcon } from "../icons/playTemp";
import { RewindIcon } from "../icons/rewind";

type ControlProps = {
  variant: "play" | "big-play" | "time";
};

export const Controls: React.FC<ControlProps> = ({ variant }) => {
  const { rewind, forward, togglePlay, isPlaying, bigPlayIconHidden } =
    useVideoStore((state) => ({
      rewind: state.rewind,
      forward: state.forward,
      togglePlay: state.togglePlay,
      isPlaying: state.isPlaying,
      bigPlayIconHidden: state.bigPlayIconHidden,
    }));

  if (variant === "big-play" && !isPlaying && !bigPlayIconHidden) {
    return (
      <Button type="big-play" title="Play" onClick={togglePlay}>
        <PlayTempIcon />
      </Button>
    );
  }

  return (
    <>
      {variant === "time" && (
        <>
          <Button type="control" title="Rewind" onClick={rewind}>
            <RewindIcon />
          </Button>
          <Button type="control" title="Forward" onClick={forward}>
            <ForwardIcon />
          </Button>
        </>
      )}

      {variant === "play" && (
        <Button
          type="control"
          title={!isPlaying ? "Play" : "Pause"}
          onClick={togglePlay}
        >
          {!isPlaying && <PlayTempIcon />}
          {isPlaying && <PauseIcon />}
        </Button>
      )}
    </>
  );
};
