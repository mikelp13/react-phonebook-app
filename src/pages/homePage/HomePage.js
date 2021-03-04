import React from "react";
import image from "../../images/phonebook.png";
import { Hero } from "./HomePageStyled";

const HomePage = () => (
  <Hero>
    <div className="container">
    <div className="heroWrapper">
      <h1> Hey! Welcome to your personal phonebook. Enjoy it!!! </h1>
      <img src={image} alt="phonebook" width="150" />
    </div>
    </div>
  </Hero>
);

export default HomePage;
