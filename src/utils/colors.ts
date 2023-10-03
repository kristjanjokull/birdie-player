import Color from "color";

type Buttons = Record<
  "background" | "backgroundHover" | "icon" | "iconHover",
  string
>;

type Colors = {
  background: string;
  dock: string;
  dockTransparent: string;
  slider: Record<"thumb" | "trackPlayed" | "trackUnPlayed", string>;
  controlButtons: Buttons;
  sidebarButtons: Buttons;
};

const _black = "#000";
const _white = "#fff";
const _whiteHover = Color(_white).darken(0.4).toString();
const _none = "none";

const _yellow = "#ecc90a";
const _red = "#b73f3f";

const _light_MainColor = "rgb(117, 117, 117)";
const _light_MainColorLighter = Color(_light_MainColor)
  .lighten(0.95)
  .toString();
const _light_MainColorDarker = Color(_light_MainColorLighter)
  .darken(0.1)
  .toString();
const _light_MainColorTransparent = Color(_light_MainColor)
  .alpha(0.5)
  .toString();

const _dark_mainColor = "#555";
const _dark_mainColorDarker = Color(_dark_mainColor).darken(0.1).toString();

export const lightThemeColors: Colors = {
  background: _white,
  dock: _light_MainColor,
  dockTransparent: _light_MainColorTransparent,
  slider: {
    thumb: _yellow,
    trackPlayed: _yellow,
    trackUnPlayed: _light_MainColorDarker,
  },
  controlButtons: {
    background: _none,
    backgroundHover: _none,
    icon: _white,
    iconHover: _whiteHover,
  },
  sidebarButtons: {
    background: _light_MainColorLighter,
    backgroundHover: _light_MainColorDarker,
    icon: _black,
    iconHover: _black,
  },
};

export const darkThemeColors: Colors = {
  background: "black",
  dock: _dark_mainColor,
  dockTransparent: _dark_mainColor,
  slider: {
    thumb: _red,
    trackPlayed: _red,
    trackUnPlayed: _light_MainColorDarker,
  },
  controlButtons: {
    background: _none,
    backgroundHover: _none,
    icon: _white,
    iconHover: _whiteHover,
  },
  sidebarButtons: {
    background: _dark_mainColor,
    backgroundHover: _dark_mainColorDarker,
    icon: _white,
    iconHover: _white,
  },
};
