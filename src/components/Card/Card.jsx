import styles from "./Card.module.scss";
import Button from "../Button/Button";

const Card = ({ className, title, menuItems, subtitle }) => {
  return (
    <>
      <div className={`${styles.card} ${className}`}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <ul className={`${styles.menu} ${className}`}>
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <div className={styles.price}>Від...грн</div>
        </ul>

        <Button text={"Замовити"} type={"button"} className={styles.button} />
      </div>
    </>
  );
};

export default Card;
