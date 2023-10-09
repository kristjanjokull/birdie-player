import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const TRACK_COLOR_ACTIVE = "#076652";
const TRACK_COLOR = "#ffffff40";

export const RangeComponent = () => {
  const [values, setValues] = useState([0]);
  return (
    <div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
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
          <div
            {...props}
            className="bp-thumb__wrapper"
            style={{ ...props.style }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values[0].toFixed(1)}
      </output>
    </div>
  );
};
