import React from "react";
import { RangeComponent } from "@/components/range/range";
import { Controls } from "@/components/controls/controls";

export const Dock = () => {
  return (
    <div className="bp-dock">
      <RangeComponent />
      <Controls />
    </div>
  );
};
