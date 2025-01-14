import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

const root = createRoot(document.getElementById("app") as HTMLElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
