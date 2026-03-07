import { createRoot } from "react-dom/client";
import RouterConfig from "./router/Router";
import "./assets/css/global.css";

createRoot(document.getElementById("root")!).render(
  <>
    <RouterConfig />
  </>,
);
