import logo from "../../assets/images/logo.png";
import scrollToElement from "../ScrollUtils/ScrollUtils";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
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
          <nav className={styles.menu}>
            <li>
              <a href="#services" onClick={(e) => handleClick(e, "services")}>
                <button type="button">Послуги</button>
              </a>
            </li>
            <a href="#about" onClick={(e) => handleClick(e, "about")}>
              <li>
                <button type="button">Про мене</button>
              </li>
            </a>
            <a href="#reviews" onClick={(e) => handleClick(e, "reviews")}>
              <li>
                <button type="button">Відгуки</button>
              </li>
            </a>
            <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
              <li>
                <button type="button">Контакти</button>
              </li>
            </a>
          </nav>

          <nav className={styles.menu_mobile}>
            <GiHamburgerMenu className={styles.gamburger} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
