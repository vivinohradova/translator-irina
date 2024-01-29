import Form from "../Form/Form";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.container}>
          <h2>Контакти</h2>
          <h3>Завжди рада бути вам корисною!</h3>
          <div className={styles.c_container}>
            <div>
              <a href="tel: +3801234567890">+380 123 456 78 90</a>
              <a href="mailto: hello.gmail.com">Email</a>
              <h4>Японія</h4>

              <a href="#">facebook logo</a>
              <a href="#">insta logo</a>
              <a href="#">telegram logo</a>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
