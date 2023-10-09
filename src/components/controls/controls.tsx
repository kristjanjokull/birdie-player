import React from "react";

import { Play } from "@/components/controls/play";
import { Rewind } from "@/components/controls/rewind";
import { Forward } from "@/components/controls/forward";
import { TimeIndicator } from "@/components/controls/timeIndicator";
import { FullScreen } from "@/components/controls/fullScreen";
import { SoundToggler } from "@/components/controls/soundToggler";
import { VideoFlip } from "@/components/controls/videoFlip";

export const Controls = () => {
  return (
    <div className="bp-controls">
      <div className="bp-controls__items">
        <Play />
        <Rewind />
        <Forward />
        <TimeIndicator />
      </div>
      <div className="bp-controls__items">
        <SoundToggler />
        <VideoFlip />
        <FullScreen />
      </div>
    </div>
  );
};
