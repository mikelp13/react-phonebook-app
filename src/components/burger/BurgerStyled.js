import styled from "styled-components";

export const StyledBurger = styled.div`
  z-index: 10;
  width: 2rem;
  height: 2rem;
  display: none;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) => (isOpen ? "#134780" : "#134780")};
    border-radius: 10px;
    transform-origin: 1px 2px;
    transition: all 200ms linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const RightNav = styled.div`
  display: flex;

  @media (max-width: 767px) {
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.burgerBackground};;
    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    top: 60px;
    right: 0;
    height: 100vh;
    width: 100%;
    /* padding-top: 3.5rem; */
    transition: transform 250ms ease-in-out;
    padding: 20px;
  }

  @media (min-width: 768px) {
   width:100%;
   height:25px;
  }
`;
