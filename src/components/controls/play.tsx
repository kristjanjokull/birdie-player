import React from "react";
import { useVideoStore } from "@/utils/state";
import { Button } from "@/components/button/button";
import { PlayIcon } from "@/icons/play";
import { PauseIcon } from "@/icons/pause";

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
      {!isPlaying && <PlayIcon />}
      {isPlaying && <PauseIcon />}
    </Button>
  );
};
