import style from "../src/assets/scss/App.module.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import { LanguageProvider } from "./components/LanguageContext";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import English from "./assets/images/english.jpg";
import Food from "./assets/images/food.jpg";
import Japan from "./assets/images/japan.jpg";

function App() {
  return (
    <>
      <LanguageProvider>
        <div className={style.app}>
          <div className={style.container}>
            <Header />
            <Main />
            <Services />
            <AboutMe />
            <Projects
              title={"English for Earth Citizen"}
              text={
                "Проект вивчення англійської мови “English for Earth Citizen” - “Англійська для громадян Землі”. Уроки англійської для закордонних подорожей, роботи за кордоном, взаємодії з іноземцями, міжнародного бізнесу, проектів, трансляцій та підприємців. Будь ласка, зв'яжіться зі мною, якщо ви зацікавлені."
              }
              image={English}
            />
            <Projects
              title={"Українська культура"}
              text={
                "Також приймаються заявки на уроки української кулінарії, майстер-класи з вишивання, виступи тощо в Японії. Будь ласка, зв'яжіться з нами."
              }
              image={Food}
            />
            <Projects
              title={"Японська з серцем"}
              text={
                "Доєднуйтеся до волонтерської групи з вивчення японської мови “Японська з серцем”. Будь ласка, зв'яжіться з нами."
              }
              image={Japan}
            />
            <Reviews />
            <Contacts />
            <Footer />
          </div>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
