import styles from "./Card.module.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Card = ({ className, title, menuItems, subtitle, price }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${styles.card} ${className}`}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <ul className={`${styles.menu} ${className}`}>
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <div className={styles.price}>{price}</div>
        </ul>

        <Button text={t("order")} type={"button"} className={styles.button} />
      </div>
    </>
  );
};

export default Card;
