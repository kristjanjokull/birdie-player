import { useVideoStore } from "../../utils/state";
import { Button } from "../button/button";
import { MuteIcon } from "../icons/mute";
import { SoundOnIcon } from "../icons/soundOn";

export const SoundToggler: React.FC = () => {
  const { isMuted, toggleMute, isPlaying } = useVideoStore((state) => ({
    isMuted: state.isMuted,
    toggleMute: state.toggleMute,
    isPlaying: state.isPlaying,
  }));
  return (
    <Button
      disabled={isPlaying}
      type="control"
      onClick={toggleMute}
      title={isMuted ? "Turn sound on" : "Turn sound off"}
    >
      {isMuted ? <MuteIcon /> : <SoundOnIcon />}
    </Button>
  );
};
