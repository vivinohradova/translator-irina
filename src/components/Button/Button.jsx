import styles from "./Button.module.scss";
import scrollToElement from "../Services/ScrollUtils/ScrollUtils";

const Button = ({ text, className, type }) => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    scrollToElement(targetId);
  };
  return (
    <>
      <a href="#contacts" onClick={(e) => handleClick(e, "contacts")}>
        <button className={`${styles.button} ${className}`} type={type}>
          {text}
        </button>
      </a>
    </>
  );
};

export default Button;
