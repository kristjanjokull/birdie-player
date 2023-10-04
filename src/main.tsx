import React from "react";
import ReactDOM from "react-dom/client";
import demoswing from "./assets/demoswing2.mp4";
import "./styles/sandBoxStyles.css";
import "./styles/styles.css";

import { Video } from "./components/video/video";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Video src={[demoswing]} />
  </React.StrictMode>,
);
