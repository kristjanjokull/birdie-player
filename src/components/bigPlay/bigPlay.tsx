import React from "react";
import { useVideoStore } from "@/utils/state";

import { Button } from "@/components/button/button";
import { PlayIcon } from "@/icons/play";

export const BigPlay = () => {
  const { isPlaying, togglePlay } = useVideoStore((state) => ({
    isPlaying: state.isPlaying,
    togglePlay: state.togglePlay,
  }));
  if (isPlaying) return null;
  return (
    <Button type="big-play" title="Play" onClick={togglePlay}>
      <PlayIcon />
    </Button>
  );
};
