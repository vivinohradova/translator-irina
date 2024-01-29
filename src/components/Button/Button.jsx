import styles from "./Button.module.scss";

const Button = ({ text, className, type }) => {
  return (
    <>
      <button className={`${styles.button} ${className}`} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button;
