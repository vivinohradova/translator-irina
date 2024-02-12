import { useState } from "react";
import styles from "./Form.module.scss";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [text, setText] = useState();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);
  };
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className={styles.form_container}
        action="mailto:honyaku.iryna@gmail.com"
        method="get"
        encType="text/plain"
      >
        <input
          className={styles.input}
          type="text"
          id="name"
          placeholder={t("formName")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="tel"></label>
        <PhoneInput
          className={styles.country}
          international
          id="tel"
          placeholder="(99) 999-99-99"
          defaultCountry="JP"
          value={phoneNumber}
          onChange={setPhoneNumber}
          displayInitialValueAsLocalNumber
          countryCallingCodeEditable={false}
          error={
            phoneNumber
              ? isPossiblePhoneNumber(phoneNumber)
                ? undefined
                : "Invalid phone number"
              : "Phone number required"
          }
        />
        {phoneNumber && isPossiblePhoneNumber(phoneNumber) ? "" : ""}
        <input
          className={styles.input}
          type="email"
          id="email"
          placeholder={t("formMail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          id="text"
          placeholder={t("request")}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {isFormSubmitted && (
          <div
            className={styles.successMessage}
            role="alert"
            aria-live="assertive"
          >
            {t("formSucces")}
          </div>
        )}
        <button className={styles.button}>{t("send")}</button>
      </form>
    </>
  );
};

export default Form;
