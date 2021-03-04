import React from "react";
import image from "../../images/phonebook-icon.png";
import { StyledLink } from "./LogoStyled";

const Logo = () => (
    <StyledLink to="/">
      <img src={image} alt="phonebook" />
    </StyledLink>
);

export default Logo;
