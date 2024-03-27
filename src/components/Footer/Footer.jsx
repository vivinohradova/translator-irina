import styles from "./Footer.module.scss";
import scrollToElement from "../ScrollUtils/ScrollUtils";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const handleClick = (e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          className={styles.topLink}
          href="main"
          onClick={(e) => handleClick(e, "main")}
        >
          {t("top")}
        </a>

        <div>
          <p className={styles.rights}>
            &copy; All rights reserved Iryna Derhachova 2024
          </p>
          <p className={styles.rights}>
            Website Development:
            <a
              className={styles.developerLink}
              href="https://www.instagram.com/frontend_vika/"
              target="blank"
            >
              Vynohradova Viktoriia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
