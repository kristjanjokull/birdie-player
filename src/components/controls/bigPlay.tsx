import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { PlayIcon } from "../icons/play";

export const BigPlay = () => {
  const { togglePlay, isPlaying, bigPlayIconHidden } = useVideoStore(
    (state) => ({
      togglePlay: state.togglePlay,
      isPlaying: state.isPlaying,
      bigPlayIconHidden: state.bigPlayIconHidden,
    }),
  );

  if (!isPlaying && !bigPlayIconHidden) {
    return (
      <Button type="big-play" title="Play" onClick={togglePlay}>
        <PlayIcon />
      </Button>
    );
  }

  return null;
};
