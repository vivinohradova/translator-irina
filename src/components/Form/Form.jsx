import { useEffect, useState } from "react";
import styles from "./Form.module.scss";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!name || !phoneNumber || !email || errorEmail || errorName);
  }, [name, phoneNumber, email, errorEmail, errorName]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: new URLSearchParams({
          name,
          phoneNumber,
          email,
          text,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsFormSubmitted(true);
      setName("");
      setPhoneNumber("");
      setEmail("");
      setText("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleValidateName = () => {
    if (name.trim() === "") {
      setErrorName("Ім'я немає бути пустим");
    } else {
      setErrorName("");
    }
  };

  const handleValidateEmail = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setErrorEmail("Невірна пошта");
    } else {
      setErrorEmail("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className={styles.form_container}
        action="sendmail.php"
        method="post"
        encType="multipart/form-data"
      >
        <input
          className={styles.input}
          type="text"
          id="name"
          placeholder={t("formName")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleValidateName}
          required
        />
        {errorName && <p className={styles.errorMessage}>{errorName}</p>}

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
        {phoneNumber && !isPossiblePhoneNumber(phoneNumber) && (
          <p className={styles.errorMessage}>Невірний номер</p>
        )}
        <input
          className={styles.input}
          type="email"
          id="email"
          placeholder={t("formMail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleValidateEmail}
        />
        {errorEmail && <p className={styles.errorMessage}>{errorEmail}</p>}

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
        <button className={styles.button} disabled={isDisabled}>
          {t("send")}
        </button>
      </form>
    </>
  );
};

export default Form;
