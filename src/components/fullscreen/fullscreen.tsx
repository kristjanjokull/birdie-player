import { useEffect, useState } from "react";

import { Button } from "../button/button";
import { FullscreenIcon } from "../icons/fullscreen";
import { FullscreenExitIcon } from "../icons/fullScreenExit";

type FullscreenFunctionTypes = () => Promise<void>;

interface FullScreenElement extends HTMLElement {
  mozRequestFullScreen?: FullscreenFunctionTypes;
  msRequestFullscreen?: FullscreenFunctionTypes;
  webkitRequestFullscreen?: FullscreenFunctionTypes;
}

interface FullScreenDocument extends Document {
  msExitFullscreen?: FullscreenFunctionTypes;
  webkitExitFullscreen?: FullscreenFunctionTypes;
  mozCancelFullScreen?: FullscreenFunctionTypes;
  exitFullscreen: FullscreenFunctionTypes;
}

export const FullScreen: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const goFullScreen = () => {
    const fsElement = document.documentElement as FullScreenElement;

    if (fsElement.requestFullscreen) {
      void fsElement.requestFullscreen();
    } else if (fsElement.mozRequestFullScreen) {
      /* Firefox */
      void fsElement.mozRequestFullScreen();
    } else if (fsElement.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      void fsElement.webkitRequestFullscreen();
    } else if (fsElement.msRequestFullscreen) {
      /* IE/Edge */
      void fsElement.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    const fsDoc = document as FullScreenDocument;
    if (fsDoc.exitFullscreen) {
      void fsDoc.exitFullscreen();
    } else if (fsDoc.mozCancelFullScreen) {
      /* Firefox */
      void fsDoc.mozCancelFullScreen();
    } else if (fsDoc.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      void fsDoc.webkitExitFullscreen();
    } else if (fsDoc.msExitFullscreen) {
      /* IE/Edge */
      void fsDoc.msExitFullscreen();
    }
  };

  return (
    <Button
      type="control"
      title={!isFullscreen ? "Go fullscreen" : "Exit fullscreen"}
      onClick={() => {
        if (!isFullscreen) {
          setIsFullscreen(true);
          goFullScreen();
        } else {
          setIsFullscreen(false);
          exitFullScreen();
        }
      }}
    >
      {!isFullscreen ? <FullscreenIcon /> : <FullscreenExitIcon />}
    </Button>
  );
};
