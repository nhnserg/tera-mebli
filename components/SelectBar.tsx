"use client";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export function SelectBar() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<string>(i18n.language);

  useEffect(() => {
    // Ensure router is mounted before using it
    setLocale(i18n.language);
  }, [i18n.language]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      { locale: value }
    );
    setLocale(value);
  };

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={handleChange}
        className="appearance-none bg-transparent text-white p-2 border border-white rounded"
      >
        <option value="ua">UA</option>
        <option value="ru">RU</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
}
