import React from "react";
import Button from "../Button/Button";
import styles from "./Projects.module.scss";

const Projects = ({ title, text, image }) => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.text}>{text}</p>
            <Button text={"Зв'язатися"} />
          </div>
          <img className={styles.image} src={image} alt={image} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
