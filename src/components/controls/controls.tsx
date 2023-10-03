import { Play } from "./play";
import { Rewind } from "./rewind";
import { Forward } from "./forward";
import { TimeIndicator } from "./timeIndicator";
import { FullScreen } from "./fullscreen";
import { SoundToggler } from "./soundToggler";
import { VideoFlip } from "./videoFlip";

export const Controls = () => {
  return (
    <div className="controls">
      <div className="controls__items">
        <Play />
        <Rewind />
        <Forward />
        <TimeIndicator />
      </div>
      <div>
        <SoundToggler />
        <VideoFlip />
        <FullScreen />
      </div>
    </div>
  );
};
