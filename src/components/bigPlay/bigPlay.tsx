import React from "react";

import { Button } from "@/components/button/button";
import { PlayIcon } from "@/icons/play";

export const BigPlay = () => {
  return (
    <Button
      type="big-play"
      title="Play"
      onClick={() => console.log("hugahuga")}
    >
      <PlayIcon />
    </Button>
  );
};
