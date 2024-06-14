import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer/Footer";
import "./App.scss";
import { useState, useMemo, createContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/** paletteMode setting Fn */
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                primary: {
                  main: "#fff",
                },
                secondary: {
                  main: "#121212",
                },
                background: {
                  default: "#ffffff",
                  paper: "#f5f5f5",
                },
                text: {
                  primary: "#121212",
                  secondary: "#333",
                },
              }
            : {
                primary: {
                  main: "#121212",
                },
                secondary: {
                  main: "#fff",
                },
                background: {
                  default: "#121212",
                  paper: "#1d1d1d",
                },
                text: {
                  primary: "#ffffff",
                  secondary: "#c8c8c8",
                },
              }),
        },
      }),
    [mode]
  );

  // console.log("App theme mode:", mode);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Nav />
            <Router />
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
