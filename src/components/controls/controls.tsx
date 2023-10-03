import { Play } from "../controls/play";
import { Rewind } from "../controls/rewind";
import { Forward } from "../controls/forward";
import { FullScreen } from "../fullscreen/fullscreen";
import { SoundToggler } from "../soundToggler/soundToggler";
import { VideoFlip } from "../videoFlip/videoFlip";

export const Controls = () => {
  return (
    <div className="controls">
      <div className="controls__items">
        <Play />
        <Rewind />
        <Forward />
      </div>
      <div>
        <SoundToggler />
        <VideoFlip />
        <FullScreen />
      </div>
    </div>
  );
};
