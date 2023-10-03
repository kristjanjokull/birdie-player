import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { PlayTempIcon } from "../icons/playTemp";
import { PauseIcon } from "../icons/pause";

export const Play = () => {
  const { isPlaying, togglePlay } = useVideoStore((state) => ({
    isPlaying: state.isPlaying,
    togglePlay: state.togglePlay,
  }));

  return (
    <Button
      type="control"
      title={!isPlaying ? "Play" : "Pause"}
      onClick={togglePlay}
    >
      {!isPlaying && <PlayTempIcon />}
      {isPlaying && <PauseIcon />}
    </Button>
  );
};
