import React, { createRef } from "react";
import { create } from "zustand";

interface VideoStore {
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  isMuted: boolean;
  isFlipped: boolean;
  bigPlayIconHidden: boolean;
  videoDuration: number;
  currentTime: number;
  toggleMute: () => void;
  toggleFlipped: () => void;
  setVideoRef: (ref: React.RefObject<HTMLVideoElement>) => void;
  setVideoDuration: (duration: number) => void;
  setCurrentTime: (time: number) => void;
  setBigPlayIconHidden: (hidePlay: boolean) => void;
  togglePlay: () => void;
  rewind: () => void;
  forward: () => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  videoRef: createRef(),
  isPlaying: false,
  isMuted: true,
  isFlipped: false,
  bigPlayIconHidden: false,
  videoDuration: 0,
  currentTime: 0,
  toggleMute: () =>
    set((state) => {
      if (state.videoRef.current) {
        state.videoRef.current.muted = !state.videoRef.current.muted;
      }

      return { isMuted: !state.isMuted };
    }),
  toggleFlipped: () =>
    set((state) => {
      return { isFlipped: !state.isFlipped };
    }),
  setVideoRef: (ref) => set({ videoRef: ref }),
  setVideoDuration: (duration) => set({ videoDuration: duration }),
  setCurrentTime: (time) => set({ currentTime: time }),
  setBigPlayIconHidden: (hidePlayIcon) =>
    set({ bigPlayIconHidden: hidePlayIcon }),
  togglePlay: () =>
    set((state) => {
      if (!state.videoRef.current) return { isPlaying: state.isPlaying };

      if (state.isPlaying) {
        void state.videoRef.current.pause();
      } else {
        void state.videoRef.current.play();
      }

      return { isPlaying: !state.isPlaying };
    }),
  rewind: () =>
    set((state) => {
      if (state.videoRef.current) {
        state.videoRef.current.currentTime = Math.max(
          0,
          state.videoRef.current.currentTime - 0.07,
        );
      }

      return { ...state };
    }),
  forward: () =>
    set((state) => {
      if (state.videoRef.current) {
        state.videoRef.current.currentTime = Math.min(
          state.videoRef.current.duration,
          state.videoRef.current.currentTime + 0.07,
        );
      }

      return { ...state };
    }),
}));
