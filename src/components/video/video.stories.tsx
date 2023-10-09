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
  return (
    <>
      <p>Video type: {videoType}</p>
      <Video
        src={videoType === "landscape" ? landscapeSwing : portraitSwing}
        width={width}
        height={height}
      />
    </>
  );
};
VideoComponent.storyName = "Video";

VideoComponent.args = {
  videoType: "landscape",
  width: "100%",
  height: "700px",
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
