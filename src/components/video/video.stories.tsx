import React from "react";
import type { Story } from "@ladle/react";

import { Video } from "@/components/video/video";
import demoswing from "@/assets/demoswing2.mp4";
import "@/assets/styles/styles.css";

export default {
  title: "Video",
};
export const VideoComponent: Story = () => <Video src={demoswing} />;
VideoComponent.storyName = "Video";
