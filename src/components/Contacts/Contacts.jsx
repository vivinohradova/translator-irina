import Form from "../Form/Form";
import styles from "./Contacts.module.scss";
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.container}>
          <h2>Контакти</h2>
          <h3>Завжди рада бути вам корисною!</h3>
          <div className={styles.c_container}>
            <div className={styles.social}>
              <a href="tel: +818048322975">+81 804 832 29 75</a>
              <p>
                <a href="mailto: honyaku.iryna@gmail.com">
                  honyaku.iryna@gmail.com
                </a>
              </p>
              <h4>Японія</h4>
              <div className={styles.social_media}>
                <a href="/">
                  <FaFacebook className={styles.facebook} />
                </a>
                <a href="/">
                  <FaInstagramSquare className={styles.instagram} />
                </a>
                <a href="/">
                  <FaTelegram className={styles.telegram} />
                </a>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
