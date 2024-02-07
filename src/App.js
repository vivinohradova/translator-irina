import style from "../src/assets/scss/App.module.scss";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import { LanguageProvider } from "./components/LanguageContext";

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
            <Reviews />
            <Contacts />
          </div>
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
