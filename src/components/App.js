import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/operations/authOperations";
import Header from "./header/Header";
import Main from "./main/Main";
import usePersitedTheme from "../hooks/persistedTheme";
import light from "../themes/light";
import dark from "../themes/dark";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../themes/GlobalStyle";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    // eslint-disable-next-line
  }, []);

  const [theme, setTheme] = usePersitedTheme("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;

