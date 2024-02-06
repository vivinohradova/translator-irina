import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.scss";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Form = () => {
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
        method="post"
        encType="text/plain"
      >
        <input
          className={styles.input}
          type="text"
          id="name"
          placeholder="Ваше ім'я"
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
          placeholder="Ваша пошта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          id="text"
          placeholder="Напишіть ваш запит"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* <Button text="Відправити" type="submit" className={styles.button} /> */}
        {isFormSubmitted && (
          <div
            className={styles.successMessage}
            role="alert"
            aria-live="assertive"
          >
            Форма успішно відправлена!
          </div>
        )}
        <button className={styles.button}>Відправити</button>
      </form>
    </>
  );
};

export default Form;
