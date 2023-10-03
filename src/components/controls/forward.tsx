import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { ForwardIcon } from "../icons/forward";

export const Forward = () => {
  const { forward } = useVideoStore((state) => ({
    forward: state.forward,
  }));

  return (
    <Button type="control" title="Forward" onClick={forward}>
      <ForwardIcon />
    </Button>
  );
};
