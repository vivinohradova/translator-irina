import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt="logo" />
          <nav className={styles.menu}>
            <li>
              <button type="button">Послуги</button>
            </li>
            <li>
              <button type="button">Про мене</button>
            </li>
            <li>
              <button type="button">Відгуки</button>
            </li>
            <li>
              <button type="button">Контакти</button>
            </li>
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
