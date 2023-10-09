import React from "react";
import type { Story } from "@ladle/react";

import { VideoNative } from "@/components/videoNative/videoNative";
import demoswing from "@/assets/demoswing2.mp4";

type ControlProps = {
  width: string;
  height: string;
};

export default {
  title: "Video Native",
};
export const VideoComponent: Story<ControlProps> = ({ width, height }) => (
  <VideoNative src={demoswing} width={width} height={height} />
);
VideoComponent.storyName = "Video Native";

VideoComponent.args = {
  width: "100%",
  height: "auto",
};

VideoComponent.argTypes = {
  width: {
    control: { type: "text" },
  },
  height: {
    control: { type: "text" },
  },
};
