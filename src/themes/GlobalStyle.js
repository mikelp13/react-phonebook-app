import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    background-color: ${({ theme }) => theme.colors.mainBackground};
    color: ${(props) => props.theme.colors.text}
}

header {
  background-color:${({ theme }) => theme.colors.main};
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.container {
  overflow: hidden;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;


  @media screen and (min-width: 320px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 750px;
  }
  @media screen and (min-width: 1280px) {
    width: 1080px;
  }
}
`;

export default GlobalStyle;
