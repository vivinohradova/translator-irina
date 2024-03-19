import logo from "../../assets/images/logo.png";
import { useLanguage } from "../LanguageContext";
import scrollToElement from "../ScrollUtils/ScrollUtils";
import styles from "./Header.module.scss";
// import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Header = () => {
  const { changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("ua");

  useEffect(() => {
    changeLanguage(selectedLanguage);
  }, [changeLanguage, selectedLanguage]);

  const languages = ["ua", "en", "jp"];

  const handleClick = (e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId);
  };
  return (
    <>
      <header>
        <div className={styles.container}>
          <a href="#main" onClick={(e) => handleClick(e, "main")}>
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <div>
            {languages.map((lang, index) => (
              <button
                className={`${styles.buttonLang} ${
                  selectedLanguage === lang ? styles.selected : ""
                }`}
                key={index}
                onClick={() => {
                  changeLanguage(lang);
                  setSelectedLanguage(lang);
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <nav className={styles.menu}>
            <li>
              <a href="#services" onClick={(e) => handleClick(e, "services")}>
                <button type="button">{t("menuService")}</button>
              </a>
            </li>

            <li>
              <a href="#about" onClick={(e) => handleClick(e, "about")}>
                <button type="button">{t("menuAboutMe")}</button>
              </a>
            </li>

            <li>
              <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
                <button type="button">{t("menuProjects")}</button>
              </a>
            </li>

            <li>
              <a href="#reviews" onClick={(e) => handleClick(e, "reviews")}>
                <button type="button">{t("menuReviews")}</button>
              </a>
            </li>

            <li>
              <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
                <button type="button">{t("menuContact")}</button>
              </a>
            </li>
          </nav>
          {/* <nav className={styles.menu_mobile}>
            <GiHamburgerMenu className={styles.gamburger} />
          </nav> */}
        </div>
      </header>
    </>
  );
};

export default Header;
