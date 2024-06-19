import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import Spinner from "./components/ui/Spinner/Spinner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </RecoilRoot>
);
