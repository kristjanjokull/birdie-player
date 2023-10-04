import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { FlipLeftIcon } from "../icons/flipLeft";
import { FlipRightIcon } from "../icons/flipRight";

export const VideoFlip: React.FC = () => {
  const { isFlipped, toggleFlipped, isPlaying } = useVideoStore((state) => ({
    isFlipped: state.isFlipped,
    toggleFlipped: state.toggleFlipped,
    isPlaying: state.isPlaying,
  }));
  return (
    <Button
      disabled={isPlaying}
      type="control"
      title={!isFlipped ? "Flip video" : "Unflip video"}
      onClick={toggleFlipped}
    >
      {!isFlipped ? <FlipRightIcon /> : <FlipLeftIcon />}
    </Button>
  );
};
