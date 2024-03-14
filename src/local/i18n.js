import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./en.json";
import jpJSON from "./jp.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    jp: { ...jpJSON }
  }, // Where we're gonna put translations' files
  lng: "en" // Set the initial language of the App
});
