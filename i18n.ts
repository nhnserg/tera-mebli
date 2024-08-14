import { i18n } from "next-i18next";
import path from "path";

const isServer = typeof window === "undefined";

export const localePath = path.resolve("./public/locales");

const options = {
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "ru"],
  },
  localePath,
  reloadOnPrerender: !isServer,
};

export default options;
