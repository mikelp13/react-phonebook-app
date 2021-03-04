import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { logOut } from "../../redux/operations/authOperations";
import { getUserName } from "../../redux/selectors/authSelectors";
import {LogoutBtn, MenuContainer} from './UserMenuStyled'


const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut())

  return (
    <MenuContainer>
      <img src= "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="avatar-icon" width="32" />
      <span>Welcome, {name}</span>
      <LogoutBtn type="button" onClick={onLogout}>
        Logout &#10149;
      </LogoutBtn>
    </MenuContainer>
  );
};

export default UserMenu;


