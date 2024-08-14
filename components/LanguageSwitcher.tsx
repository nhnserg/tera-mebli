import { useRouter } from "next/router";
// import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  // const { i18n } = useTranslation();
  // const { locale, asPath } = useRouter();

  const handleChangeLanguage = (lng: string) => {
    // i18n.changeLanguage(lng);
    console.log(`Language changed to: ${lng}`);
  };

  return (
    <div>
      <button
        onClick={() => handleChangeLanguage("uk")}
        // disabled={locale === "uk"}
      >
        Українська
      </button>
      <button
        onClick={() => handleChangeLanguage("ru")}
        // disabled={locale === "ru"}
      >
        Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;
