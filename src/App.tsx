import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer/Footer";
import "./App.scss";
import { useState, useMemo, createContext, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { authState } from "./utils/atoms/authState";
import { authService } from "./firebase/firebase";

/** paletteMode setting Fn */
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const setAuthState = useSetRecoilState(authState);

  const [mode, setMode] = useState<"light" | "dark">(
    () => (sessionStorage.getItem("themeMode") as "light" | "dark") || "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          sessionStorage.setItem("themeMode", newMode);
          return newMode;
        });
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

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authService, async (user) => {
      const userState = JSON.parse(JSON.stringify(user));
      if (user) {
        console.log("User is logged in:", user);
        setAuthState({ isLogin: true, user: userState });
      } else {
        console.log("User is logged out");
        setAuthState({ isLogin: false, user: null });
      }
    });

    return () => unsubscribe();
  }, [setAuthState]);

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
