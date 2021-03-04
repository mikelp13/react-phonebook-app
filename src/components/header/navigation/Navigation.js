import React from "react";
import { useSelector } from "react-redux";
import { isLogin } from "../../../redux/selectors/authSelectors";
import phonebookRoutes from "../../../routes/phonebookRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavList } from "./NavigationStyled";

const Navigation = ({onClick}) => {

  const isAuthenticated = useSelector(isLogin);


  
  return (
    <NavList>
      {phonebookRoutes.map((route)=>(
        <NavigationListItem {...route} isAuth={isAuthenticated} key={route.path} onClick={onClick} />
      ))}
    </NavList>
  );
};

export default Navigation;
