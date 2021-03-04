import styled from "styled-components";

export const Hero = styled.div`
  margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.primary};

  .heroWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;

    @media (max-width: 767px) {
      justify-content: space-evenly;
    }
  }

  h1 {
    width: 300px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.1em;

    @media (min-width: 320px) and (max-width: 479px) {
      font-size: 18px;
    }

    @media (min-width: 480px) and (max-width: 767px) {
      font-size: 25px;
    }

    @media (min-width: 768px) {
      width: 480px;
    }
  }

  img {

    @media (min-width: 480px) and (max-width: 767px) {
      width: 200px;
    }
    @media (min-width: 768px) {
      width: 240px;
    }
  }
`;
