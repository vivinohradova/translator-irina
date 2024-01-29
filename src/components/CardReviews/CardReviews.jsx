import styles from "./CardReviews.module.scss";

const CardReviews = (props) => {
  const { userName, userPosition, questions, replies } = props;

  return (
    <>
      <div className={styles.card_reviews}>
        <div>
          <p className={styles.name}>{userName}</p>
          <p className={styles.position}>{userPosition}</p>
        </div>
        <div className={styles.question_answer}>
          <li>
            <p>{questions[0]}</p>
            <p>{replies[0]}</p>
          </li>
          <li>
            <p>{questions[1]}</p>
            <p>{replies[1]}</p>
          </li>
          <li>
            <p>{questions[2]}</p>
            <p>{replies[2]}</p>
          </li>
        </div>
      </div>
    </>
  );
};

export default CardReviews;
