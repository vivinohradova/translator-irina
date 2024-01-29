import styles from "./Main.module.scss";
import Button from "../Button/Button";

const Main = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <Button
            text={"Отримати консультацію"}
            type={"button"}
            className={styles.button}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
