import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
// import { useVideoStore } from "../../utils/state";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

export const RangeSliderNew = () => {
  const [values, setValues] = useState([0]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
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
            className="trackContainer"
            style={{ ...props.style }}
          >
            <div
              ref={props.ref}
              className="track"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#076652", "#ffffff40"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="thumb" style={{ ...props.style }}></div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values[0].toFixed(1)}
      </output>
    </div>
  );
};
