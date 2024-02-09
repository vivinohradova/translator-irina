import styles from "./Main.module.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <main id="main">
        <div className={styles.container}>
          <h1 className={styles.title}>{t("mainName")}</h1>
          <p className={styles.text}>{t("mainText")}</p>
          <Button
            text={t("getConsultation")}
            type={"button"}
            className={styles.button}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
