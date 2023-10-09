import React from "react";
import { useVideoStore } from "@/utils/state";

export const TimeIndicator = () => {
  const { videoRef, currentTime } = useVideoStore((state) => ({
    videoRef: state.videoRef,
    currentTime: state.currentTime,
  }));

  return (
    <div className="timeIndicator">
      <span>{currentTime.toFixed(2)}</span>
      <span>/</span>
      <span>{videoRef.current?.duration.toFixed(2)}</span>
    </div>
  );
};
