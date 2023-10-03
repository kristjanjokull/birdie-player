import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { RewindIcon } from "../icons/rewind";

export const Rewind = () => {
  const { rewind } = useVideoStore((state) => ({
    rewind: state.rewind,
  }));

  return (
    <Button type="control" title="Rewind" onClick={rewind}>
      <RewindIcon />
    </Button>
  );
};
