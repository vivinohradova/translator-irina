import styles from "./Main.module.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <main id="main">
        <div className={styles.container}>
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
