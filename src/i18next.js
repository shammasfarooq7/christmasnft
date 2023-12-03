import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from "./translations/en/translation.json"
import italian from "./translations/it/translation.json"


i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: english
      },
      it: {
        translation: italian
      }
    }
  });


export default i18n;