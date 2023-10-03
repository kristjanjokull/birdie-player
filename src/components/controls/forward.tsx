import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { ForwardIcon } from "../icons/forward";

export const Forward = () => {
  const { forward, isPlaying } = useVideoStore((state) => ({
    forward: state.forward,
    isPlaying: state.isPlaying,
  }));

  return (
    <Button
      disabled={isPlaying}
      type="control"
      title="Forward"
      onClick={forward}
    >
      <ForwardIcon />
    </Button>
  );
};
