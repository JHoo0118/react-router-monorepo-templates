import { supportedLanguages } from "./resource";

export default {
  // This is the list of languages your application supports
  supportedLngs: supportedLanguages,
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "ko",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "common",
};
