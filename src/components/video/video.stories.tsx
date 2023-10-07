import React from "react";
import { Video } from "@/components/video/video";
import "@/assets/styles/styles.css";
import demoswing from "@/assets/demoswing2.mp4";

export default {
  title: "Video",
};
export const VideoComponent = () => <Video src={demoswing} />;
