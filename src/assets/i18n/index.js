import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esGlobal from "@/assets/i18n/locales/es/global.json";
import enGlobal from "@/assets/i18n/locales/en/global.json";

import esC1T1 from "@/assets/i18n/locales/es/categori1/category1-destination1.json";
import esC1T2 from "@/assets/i18n/locales/es/categori1/category1-destination2.json";
import esC1T3 from "@/assets/i18n/locales/es/categori1/category1-destination3.json";
import esC1T4 from "@/assets/i18n/locales/es/categori2/category1-destination4.json";
import esC1T5 from "@/assets/i18n/locales/es/categori2/category1-destination5.json";
import esC1T6 from "@/assets/i18n/locales/es/categori2/category1-destination6.json";
import esC1T7 from "@/assets/i18n/locales/es/categori3/category1-destination7.json";
import esC1T8 from "@/assets/i18n/locales/es/categori3/category1-destination8.json";
import esC1T9 from "@/assets/i18n/locales/es/categori3/category1-destination9.json";
import esC1T10 from "@/assets/i18n/locales/es/categori4/category1-destination10.json";
import esC1T11 from "@/assets/i18n/locales/es/categori4/category1-destination11.json";
import esC1T12 from "@/assets/i18n/locales/es/categori4/category1-destination12.json";
import esC1T13 from "@/assets/i18n/locales/es/categori5/category1-destination13.json";
import esC1T14 from "@/assets/i18n/locales/es/categori5/category1-destination14.json";
import esC1T15 from "@/assets/i18n/locales/es/categori5/category1-destination15.json";

import enC1T1 from "@/assets/i18n/locales/en/categori1/category1-destination1.json";
import enC1T2 from "@/assets/i18n/locales/en/categori1/category1-destination2.json";
import enC1T3 from "@/assets/i18n/locales/en/categori1/category1-destination3.json";
import enC1T4 from "@/assets/i18n/locales/en/categori2/category1-destination4.json";
import enC1T5 from "@/assets/i18n/locales/en/categori2/category1-destination5.json";
import enC1T6 from "@/assets/i18n/locales/en/categori2/category1-destination6.json";
import enC1T7 from "@/assets/i18n/locales/en/categori3/category1-destination7.json";
import enC1T8 from "@/assets/i18n/locales/en/categori3/category1-destination8.json";
import enC1T9 from "@/assets/i18n/locales/en/categori3/category1-destination9.json";
import enC1T10 from "@/assets/i18n/locales/en/categori4/category1-destination10.json";
import enC1T11 from "@/assets/i18n/locales/en/categori4/category1-destination11.json";
import enC1T12 from "@/assets/i18n/locales/en/categori4/category1-destination12.json";
import enC1T13 from "@/assets/i18n/locales/en/categori5/category1-destination13.json";
import enC1T14 from "@/assets/i18n/locales/en/categori5/category1-destination14.json";
import enC1T15 from "@/assets/i18n/locales/en/categori5/category1-destination15.json";

const resources = {
    es: {
        global: esGlobal,
        'category1-destination1': esC1T1,
        'category1-destination2': esC1T2,
        'category1-destination3': esC1T3,
        'category1-destination4': esC1T4,
        'category1-destination5': esC1T5,
        'category1-destination6': esC1T6,
        'category1-destination7': esC1T7,
        'category1-destination8': esC1T8,
        'category1-destination9': esC1T9,
        'category1-destination10': esC1T10,
        'category1-destination11': esC1T11,
        'category1-destination12': esC1T12,
        'category1-destination13': esC1T13,
        'category1-destination14': esC1T14,
        'category1-destination15': esC1T15,
    },
    en: {
        global: enGlobal,
        'category1-destination1': enC1T1,
        'category1-destination2': enC1T2,
        'category1-destination3': enC1T3,
        'category1-destination4': enC1T4,
        'category1-destination5': enC1T5,
        'category1-destination6': enC1T6,
        'category1-destination7': enC1T7,
        'category1-destination8': enC1T8,
        'category1-destination9': enC1T9,
        'category1-destination10': enC1T10,
        'category1-destination11': enC1T11,
        'category1-destination12': enC1T12,
        'category1-destination13': enC1T13,
        'category1-destination14': enC1T14,
        'category1-destination15': enC1T15,
    },
};

//const savedLanguage = localStorage.getItem("language") || "es";

i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "es",
    defaultNS: "global",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
