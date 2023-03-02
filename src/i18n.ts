import i18next, { PostProcessorModule } from "i18next";
import { initReactI18next } from "react-i18next";

const APP_NAME = "the  loca";
const INTERPOLATION_KEY = "{{appName}}";

const postProcessor: PostProcessorModule = {
  type: "postProcessor",
  name: "nameOfProcessor",
  process: function (value, key, options, translator) {
    if (value.includes(INTERPOLATION_KEY)) {
      const newValue = value.replace(INTERPOLATION_KEY, APP_NAME);
      return newValue;
    }

    return value.toUpperCase() + " -> POST-PROCESSOR";
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(postProcessor)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React and react-i18next",
          appName: "{{appName}}",
          nullValue: null,
          emptyValue: "",
          key: "{{what}} is {{how}}",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido a React y react-i18next",
          appName: "{{appName}}",
          nullValue: null,
          emptyValue: "",
          key: "{{what}} is {{how}}",
        },
      },
    },
    returnNull: false,
    returnEmptyString: false,
    lng: "es", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    postProcess: "nameOfProcessor",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18next;
