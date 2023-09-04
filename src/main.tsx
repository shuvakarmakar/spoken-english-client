import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.tsx";
import { router } from "./Routes/Router.tsx";
import { RouterProvider } from "react-router";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const queryClient = new QueryClient();

import tEn from './Translations/en/translation.json'
import tDe from './Translations/de/translation.json'
import tBn from './Translations/bn/translation.json'
import tHi from './Translations/hi/translation.json'
import tFr from './Translations/fr/translation.json'



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn
      },
      de: {
        translation: tDe
      },
      bn: {
        translation: tBn
      },
      hi: {
        translation: tHi
      },
      fr: {
        translation: tFr
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
