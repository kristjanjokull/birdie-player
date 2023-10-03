import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { FlipLeftIcon } from "../icons/flipLeft";
import { FlipRightIcon } from "../icons/flipRight";

export const VideoFlip: React.FC = () => {
  const { isFlipped, toggleFlipped } = useVideoStore((state) => ({
    isFlipped: state.isFlipped,
    toggleFlipped: state.toggleFlipped,
  }));
  return (
    <Button
      type="control"
      title={!isFlipped ? "Flip video" : "Unflip video"}
      onClick={toggleFlipped}
    >
      {!isFlipped ? <FlipRightIcon /> : <FlipLeftIcon />}
    </Button>
  );
};
