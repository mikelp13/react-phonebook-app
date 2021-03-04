import styled from "styled-components";

export const HeaderStyled = styled.header`
  .headerContainer {
    display: flex;
    align-items: center;

    @media screen and (max-width: 767px) {
      justify-content: space-between;
      width: 100%;
    }
  }
`;
