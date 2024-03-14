import styles from "./Popup.module.scss";
import Form from "../Form/Form";

const Popup = ({ isPopupOpen, togglePopup }) => {
  return (
    <>
      <div className={styles.popupContainer}>
        {isPopupOpen && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <Form />
              <button className={styles.buttonClose} onClick={togglePopup}>
                Закрити
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Popup;
