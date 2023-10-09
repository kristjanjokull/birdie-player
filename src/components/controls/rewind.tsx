import React from "react";

import { useVideoStore } from "@/utils/state";
import { Button } from "@/components/button/button";
import { RewindIcon } from "@/icons/rewind";

export const Rewind = () => {
  const { rewind, isPlaying } = useVideoStore((state) => ({
    rewind: state.rewind,
    isPlaying: state.isPlaying,
  }));

  return (
    <Button disabled={isPlaying} type="control" title="Rewind" onClick={rewind}>
      <RewindIcon />
    </Button>
  );
};
