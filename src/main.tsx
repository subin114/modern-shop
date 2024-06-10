import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RecoilRoot } from "recoil";

// const darkTheme = createTheme({
//   palette: {
//     // mode: "dark",
//   },
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <ThemeProvider theme={darkTheme}>
  //   <CssBaseline />
  <RecoilRoot>
    <App />
  </RecoilRoot>
  // </ThemeProvider>
);
