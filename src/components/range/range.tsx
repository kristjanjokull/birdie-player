import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

import { useVideoStore } from "@/utils/state";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const TRACK_COLOR_ACTIVE = "#076652";
const TRACK_COLOR = "#ffffff40";

export const RangeComponent = () => {
  const { currentTime, videoDuration, setCurrentTime } = useVideoStore(
    (state) => ({
      currentTime: state.currentTime,
      videoDuration: state.videoDuration,
      setCurrentTime: state.setCurrentTime,
    }),
  );

  const [values, setValues] = useState([0]);

  // Update values when currentTime or videoDuration changes
  useEffect(() => {
    setValues([(currentTime / videoDuration) * 100]);
  }, [currentTime, videoDuration]);
  return (
    <div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setCurrentTime((values[0] / 100) * videoDuration);
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="bp-track__wrapper"
            style={{ ...props.style }}
          >
            <div
              ref={props.ref}
              className="bp-track"
              style={{
                background: getTrackBackground({
                  values,
                  colors: [TRACK_COLOR_ACTIVE, TRACK_COLOR],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div {...props} className="bp-thumb" style={{ ...props.style }}></div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values[0].toFixed(1)}
      </output>
    </div>
  );
};
