import styles from "./Services.module.scss";
import Card from "../Card/Card";

const rewiewsName = {
  service1: [
    "Загальний",
    "IT",
    "Науковий",
    "Медичний",
    "Юридичний",
    "Переклад видавництва",
  ],
  service2: [
    "Інтерв’ю, репортаж",
    "Бізнес",
    "Наукова конференція",
    "Політичні перемовини",
    "Проста розмова на загальні теми",
  ],
  service3: [
    "Телебачення, ЗМІ, радіо",
    "Соціальні проекти та організації",
    "Наукова конференція",
    "Політичні перемовини",
    "Бізнес",
    "Супровідний переклад",
  ],
  service4: ["Переклад субтитрів", "Транскрипція відео у текст", "Озвучування"],
};

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2>Послуги</h2>
        <p className={styles.text}>
          Пропоную достовірний та якісний переклад з японської мови на
          українську та з української на японську мову. Також за потребою працюю
          з англійською мовою.
        </p>
        <div className={styles.card_container}>
          <Card title={"Письмовий переклад"} menuItems={rewiewsName.service1} />
          <Card
            title={"Усний (послідовний) переклад"}
            subtitle={"Онлайн"}
            menuItems={rewiewsName.service2}
          />
          <Card
            title={"Усний (послідовний) переклад"}
            subtitle={"На місці"}
            menuItems={rewiewsName.service3}
          />
          <Card title={"Переклад відео"} menuItems={rewiewsName.service4} />
        </div>
      </div>
    </section>
  );
};

export default Services;
