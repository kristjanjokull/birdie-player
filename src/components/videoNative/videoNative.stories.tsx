import React from "react";
import type { Story } from "@ladle/react";

import { VideoNative } from "@/components/videoNative/videoNative";
import demoswing from "@/assets/demoswing2.mp4";
import "@/assets/styles/styles.css";

export default {
  title: "Video Native",
};
export const VideoComponent: Story = () => <VideoNative src={demoswing} />;
