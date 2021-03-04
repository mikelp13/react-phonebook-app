import React from "react";
import Burger from "../burger/Burger";
import Logo from "../logo/Logo";
import { HeaderStyled } from "./HeaderStyled";

const Header = ({ toggleTheme }) => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="headerContainer">
          <Logo />
          <Burger toggleTheme={toggleTheme} />
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
