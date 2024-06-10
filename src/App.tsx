import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Nav from "./components/layout/Nav/Nav";
import Footer from "./components/layout/Footer/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import { amber, deepOrange, grey } from "@mui/material/colors";
// import { PaletteMode } from "@mui/material";
// import { useState, useMemo } from "react";

/** paletteMode setting Fn */
// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });

function App() {
  // const [mode, setMode] = useState<PaletteMode>("light");
  // const colorMode = useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === "light" ? "dark" : "light"
  //       );
  //     },
  //   }),
  //   []
  // );

  // // Update the theme only if the mode changes
  // const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //   },
  // });

  return (
    <>
      {/* <ColorModeContext.Provider value={colorMode}> */}
      {/* <ThemeProvider theme={darkTheme}> */}
      <BrowserRouter>
        <section>
          <Nav />
          <section>
            <Router />
          </section>
          <Footer />
        </section>
      </BrowserRouter>
      {/* </ThemeProvider> */}
      {/* </ColorModeContext.Provider> */}
    </>
  );
}

export default App;
