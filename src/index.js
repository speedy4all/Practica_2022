import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import "antd/dist/antd.min.css";
import App from "./containers/App";
import AppContextProvider from "./containers/App/context";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
