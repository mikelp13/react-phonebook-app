import React, {useContext} from "react";
import { ThemeContext } from "styled-components";
import { Label } from "./ThemeSwitchStyled";

const ThemeSwitch = ({ toggleTheme}) => {
  const theme = useContext(ThemeContext)
  return (
    <Label className="switch">
      <input type="checkbox" checked={theme.title === "dark"} onChange={toggleTheme} />
      <span className="slider"></span>
    </Label>
  );
};

export default ThemeSwitch;
