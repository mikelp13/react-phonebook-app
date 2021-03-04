import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/selectors/authSelectors';
import Navigation from '../header/navigation/Navigation';
import ThemeSwitch from '../themeSwitch/ThemeSwitch';
import UserMenu from '../userMenu/UserMenu';
import { StyledBurger, RightNav } from './BurgerStyled';


const Burger = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(isLogin)

  const onHandleClick = () =>
  setIsOpen(!isOpen);

  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={onHandleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav isOpen={isOpen} >
      <Navigation onClick={onHandleClick}/>
      {isAuthenticated && <UserMenu />}
      <ThemeSwitch toggleTheme={toggleTheme} />
      </RightNav>
    </>
  );
};

export default Burger;
