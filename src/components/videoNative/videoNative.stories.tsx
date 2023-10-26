import React from "react";
import type { Story } from "@ladle/react";

import landscapeSwing from "@/assets/landscape.mp4";
import portraitSwing from "@/assets/portrait.mp4";
import { VideoNative } from "./videoNative";

const orientationOptions = ["landscape", "portrait"] as const;

type ControlProps = {
  orientation: (typeof orientationOptions)[number];
  width: string;
  height: string;
};

export default {
  title: "Video Native",
};
export const VideoComponent: Story<ControlProps> = ({
  orientation,
  width,
  height,
}) => {
  return (
    <>
      <p>Orientation: {orientation}</p>
      <VideoNative
        src={orientation === "landscape" ? landscapeSwing : portraitSwing}
        width={width}
        height={height}
        orientation={orientation}
      />
    </>
  );
};
VideoComponent.storyName = "Video Native";

VideoComponent.args = {
  orientation: "landscape",
  width: "100%",
  height: "700px",
};

VideoComponent.argTypes = {
  orientation: {
    name: "Video type",
    options: orientationOptions,
    control: { type: "radio" },
  },
  width: {
    control: { type: "text" },
  },
  height: {
    control: { type: "text" },
  },
};
