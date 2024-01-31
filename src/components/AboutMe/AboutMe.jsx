import styles from "./AboutMe.module.scss";
import irina2 from "../../assets/images/irina2.jpg";
import irina3 from "../../assets/images/irina3.jpg";
import document1 from "../../assets/images/document1.jpg";
import document2 from "../../assets/images/document2.jpg";

const AboutMe = () => {
  return (
    <>
      <section id="about" className={styles.about_me}>
        <div className={styles.container}>
          <h2 className={styles.title}>Про мене</h2>

          <div className={styles.images_container}>
            <figure>
              <img className={styles.image} src={irina2} alt="my" />
              <figcaption>
                Мене звати Дергачова Ірина, я перекладач з японської та
                англійської мов з 2014 року. Маю досвід в роботі з загальним,
                юридичним, медичним, науковим, соціальним і бізнес перекладом.
                Працюю як з усним перекладом, так і письмовим. Закінчила два
                університети в Україні - ХНПУ імені Г.С. Сковороди (бакалавр) та
                КНУ імені Т.Г. Шевченка (магістр) за спеціальністю японська та
                англійська мова і переклад. Маю сертифікат з рівню знання
                японської JLPT N1 (найвищий рівень).
                <p>
                  Я переможець японського конкурсу промов у місті Київ, завдяки
                  чому змогла вперше поїхати до Японії за дослідницькою
                  програмою Japan Foundation (Osaka) у 2015 році.
                </p>
                <p>
                  2016 - 2018 працювала викладачем японської мови в університеті
                  УДУ імені Драгоманова.
                </p>
                <p>
                  З 2019 року я працювала у Японії у коледжі в Нагої у відділі
                  підтримки міжнародних студентів.
                </p>
              </figcaption>
            </figure>

            <figure>
              <img className={styles.image} src={irina3} alt="my" />
              <figcaption>
                <p>
                  З травня 2020 по липень 2021 року - працювала перекладачем та
                  веб-дизайнером в японській IT компанії Demand-Link.
                </p>
                <p>
                  З 2022 року співпрацюю з японськими перекладацькими конторами
                  Linegate, Sunflare, Intergroup, Franchir. Працювала у відділі
                  міжнародних новин на каналі TBS. Перекладала для НПО та
                  організацій, що підтримують біженців NPO Kraiyany, CINGA, FRJ,
                  Arrupe Refugee Center, Minato International Association (MIA).
                  Я маю багатий досвід з перекладу і спілкування з людьми.
                </p>
                <p>
                  У 2023 р. створила благодійний проект “Японська з серцем”, де
                  викладаю японську мову на волонтерських засадах. Займаюся
                  поширенням української культури, зокрема викладаю приготування
                  українських страв та вишивання хрестиком. Маю сертифікат
                  тренера з емоційного інтелекту та 2 ступінь енергетичного
                  зцілення Рейкі.
                </p>
              </figcaption>
            </figure>

            <figure className={styles.documents}>
              <img src={document1} alt="certificate" />
              <img src={document2} alt="diploma" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
