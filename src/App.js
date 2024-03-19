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
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
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
              text={t("projectTextEng")}
              image={English}
            />
            <Projects
              title={t("projectTitleUA")}
              text={t("projectTextUA")}
              image={Food}
            />
            <Projects
              title={t("projectTitleVolunteer")}
              text={t("projectTextVolunteer")}
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
