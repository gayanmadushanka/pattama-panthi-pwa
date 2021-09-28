import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import { USER_LANGUAGE } from "./constants/Globals";

const fallbackLng = ["en"];
const availableLanguages = ["en", "zh", "km"];
// const userLanguage = window.localStorage.getItem(USER_LANGUAGE);

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    // lng: userLanguage || process.env.REACT_APP_LANG || 'en',
    lng: "en",
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
