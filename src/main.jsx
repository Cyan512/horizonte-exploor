import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "@/assets/i18n";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </BrowserRouter>
    </StrictMode>
);
