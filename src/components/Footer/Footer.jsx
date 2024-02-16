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
        <a href="main" onClick={(e) => handleClick(e, "main")}>
          {t("top")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
