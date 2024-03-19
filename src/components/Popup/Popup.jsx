import styles from "./Popup.module.scss";
import Form from "../Form/Form";
import { useTranslation } from "react-i18next";

const Popup = ({ isPopupOpen, togglePopup }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.popupContainer}>
        {isPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <Form />
              <button className={styles.buttonClose} onClick={togglePopup}>
                {t("close")}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Popup;
