import { initReactI18next } from "react-i18next";
import { resources } from "./resources";
import i18next from "i18next";

const savedLanguage = localStorage.getItem("language") || "es";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: savedLanguage,
  fallbackLng: "es",
  resources,
  defaultNS: "global",
});

export default i18next;
