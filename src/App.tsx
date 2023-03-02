import React from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{`with key: ${t("welcome")}`}</p>

      <p>{t("appName")}</p>

      <p>{`null value: ${t("nullValue")}`}</p>

      <p>{`empty value: ${t("emptyValue")}`}</p>

      <p>{`no key: ${t("noKey")}`}</p>

      <p>{`interpolation: ${t("key", { what: "i18next", how: "great" })}`}</p>
    </div>
  );
}

export default App;
