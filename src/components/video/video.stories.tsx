import React from "react";
import type { Story } from "@ladle/react";

import { Video } from "@/components/video/video";
import landscapeSwing from "@/assets/landscape.mp4";
import portraitSwing from "@/assets/portrait.mp4";

const videoTypeOptions = ["landscape", "portrait"] as const;

type ControlProps = {
  videoType: (typeof videoTypeOptions)[number];
  width: string;
  height: string;
};

export default {
  title: "Video",
};
export const VideoComponent: Story<ControlProps> = ({
  videoType,
  width,
  height,
}) => {
  const vidSrc = videoType === "landscape" ? landscapeSwing : portraitSwing;
  return (
    <div>
      <p>Video type: {videoTypeOptions}</p>
      <Video src={vidSrc} width={width} height={height} />
    </div>
  );
};
VideoComponent.storyName = "Video";

VideoComponent.args = {
  videoType: "landscape",
  width: "100%",
  height: "auto",
};

VideoComponent.argTypes = {
  videoType: {
    name: "Video type",
    options: videoTypeOptions,
    control: { type: "radio" },
  },
  width: {
    control: { type: "text" },
  },
  height: {
    control: { type: "text" },
  },
};
