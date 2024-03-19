import styles from "./Reviews.module.scss";
import CardReviews from "../CardReviews/CardReviews";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const usersData = [
  {
    id: 1,
    userName: "userName1",
    userPosition: "userPosition1",
    questions: ["questions1", "questions2", "questions3"],
    replies: ["replies1", "replies2", "replies3"],
  },
  {
    id: 2,
    userName: "userName2",
    userPosition: "userPosition2",
    questions: ["questions1", "questions2", "questions3"],
    replies: ["replies4", "replies5", "replies6"],
  },
  {
    id: 3,
    userName: "userName3",
    userPosition: "userPosition3",
    questions: ["questions1", "questions2", "questions3NextAge"],
    replies: ["replies7", "replies8", "replies9"],
  },
  {
    id: 4,
    userName: "userName4",
    userPosition: "userPosition4",
    questions: ["questions2", "questions4"],
    replies: ["replies10", "replies11"],
  },
];

const Reviews = () => {
  const { t } = useTranslation();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [autoSwitchEnabled, setAutoSwitchEnabled] = useState(true);
  const intervalRef = useRef(null);

  const translatedUsersData = usersData.map((user) => ({
    ...user,
    userName: t(user.userName),
    userPosition: t(user.userPosition),
    questions: user.questions.map((question) => t(question)),
    replies: user.replies.map((reply) => t(reply)),
  }));

  useEffect(() => {
    if (autoSwitchEnabled) {
      intervalRef.current = setInterval(() => {
        setActiveCardIndex((prevIndex) =>
          prevIndex < translatedUsersData.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSwitchEnabled]);

  const handlePrevClick = () => {
    setActiveCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : translatedUsersData.length - 1
    );
    setAutoSwitchEnabled(false);
  };

  const handleNextClick = () => {
    setActiveCardIndex((nextIndex) =>
      nextIndex < translatedUsersData.length - 1 ? nextIndex + 1 : 0
    );
    setAutoSwitchEnabled(false);
  };

  return (
    <>
      <section id="reviews" className={styles.reviews}>
        <div className={styles.container}>
          <h2>{t("menuReviews")}</h2>
          <div className={styles.card_container}>
            <CardReviews {...translatedUsersData[activeCardIndex]} />
            <div className={styles.buttons}>
              <FaAngleDoubleLeft
                className={styles.button}
                onClick={handlePrevClick}
              >
                &#60;
              </FaAngleDoubleLeft>
              <FaAngleDoubleRight
                className={styles.button}
                onClick={handleNextClick}
              >
                &#62;
              </FaAngleDoubleRight>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
