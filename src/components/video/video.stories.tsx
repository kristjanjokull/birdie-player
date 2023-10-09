import React from "react";
import type { Story } from "@ladle/react";

import { Video } from "@/components/video/video";
import demoswing from "@/assets/demoswing2.mp4";

type ControlProps = {
  width: string;
  height: string;
};

export default {
  title: "Video",
};
export const VideoComponent: Story<ControlProps> = ({ width, height }) => (
  <Video src={demoswing} width={width} height={height} />
);
VideoComponent.storyName = "Video";

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
