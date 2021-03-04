import styled from "styled-components";

export const NavList = styled.ul`
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 130px 0;
  }
  @media (min-width: 768px) {
    display: flex;
    margin-left: 30px;
    margin-right: auto;
  }

  .navagationListItem:not(:last-child) {

    @media (max-width: 767px) {
      margin-bottom: 60px;
    }
    @media (min-width: 768px) {
      margin-right: 20px;
    }

 
  }

  .navagationLink {
    padding: 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.background};

    @media (min-width: 768px) {
      padding: 13px;
    }


  }

  .activeLink {
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
