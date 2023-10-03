import { useThemeStore } from "../../utils/state";
import { Button } from "../button/button";
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";

export const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button type="sidebar" title="Change theme" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
