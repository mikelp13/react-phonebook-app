import React from "react";
import NavigationLink from "./NavigationLink";

const NavigationListItem = ({
  isAuth,
  isPrivate,
  restricted,
  onClick,
  ...routeProps
}) => (
  <>
    {!isPrivate && !restricted && <NavigationLink {...routeProps} onClick={onClick} />}

    {isAuth && isPrivate && !restricted && <NavigationLink {...routeProps} onClick={onClick} />}

    {!isAuth && !isPrivate && restricted && <NavigationLink {...routeProps} onClick={onClick} />}
  </>
);

export default NavigationListItem;
