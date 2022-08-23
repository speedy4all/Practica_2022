import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import "antd/dist/antd.min.css";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
