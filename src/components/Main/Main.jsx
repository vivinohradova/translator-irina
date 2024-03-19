import styles from "./Main.module.scss";
import { useTranslation } from "react-i18next";
import Popup from "../Popup/Popup";
import { useState } from "react";

const Main = () => {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <main id="main" className={isPopupOpen ? styles.popupOpen : ""}>
        <div className={styles.container}>
          <h1 className={styles.title}>{t("mainName")}</h1>
          <p className={styles.text}>{t("mainText")}</p>
          {!isPopupOpen && (
            <button className={styles.button} onClick={togglePopup}>
              {t("getConsultation")}
            </button>
          )}
          <Popup isPopupOpen={isPopupOpen} togglePopup={togglePopup} />
        </div>
      </main>
    </>
  );
};

export default Main;
