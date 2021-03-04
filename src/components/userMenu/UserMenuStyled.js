import styled from "styled-components";

export const MenuContainer = styled.div`
  @media (max-width: 767px) {
    position: absolute;

    img {
      margin: 0 auto;
      width: 50px;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 30px;

    img {
      margin-right: 5px;
    }
  }

  span {
    font-weight: 700;
    margin-right: 12px;
  }
`;

export const LogoutBtn = styled.button`
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  padding: 3px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};

    &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
    transition: all 250ms linear;
  }
`;
