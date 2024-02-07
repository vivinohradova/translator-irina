import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ua",
    debug: true,

    resources: {
      ua: {
        translation: {
          menuService: "Послуги",
          menuAboutMe: "Про мене",
          menuReviews: "Відгуки",
          menuContact: "Контакти",
          getConsultation: "Отримати консультацію",
          serviceText:
            "Пропоную достовірний та якісний переклад з японської мови на українську та з української на японську мову. Також за потребою працюю з англійською мовою.",
          writtenTranslation: "Письмовий переклад",

          general: "Загальний",
          scientific: "Науковий",
          medical: "Медичний",
          legal: "Юридичний",
          publishingHouse: "Переклад видавництва",

          oral: "Усний (послідовний) переклад",
          online: "Онлайн",
          interview: "Інтерв’ю, репортаж",
          business: "Бізнес",
          conference: "Наукова конференція",
          negotiations: "Політичні перемовини",
          conversation: "Проста розмова на загальні теми",

          spot: "На місці",
          television: "Телебачення, ЗМІ, радіо",
          socialProjects: "Соціальні проекти та організації",
          accompanying: "Супровідний переклад",

          videoTranslation: "Переклад відео",
          subtitles: "Переклад субтитрів",
          transcription: "Транскрипція відео у текст",
          voicing: "Озвучування",

          order: "Замовити",
          fromWrittenTranslation: "Від 500 грн",
          fromOralOnline: "Від 600 грн",
          fromOralSpot: "Від 1200 грн",
          fromVideoTranslation: "Від 500 грн",
        },
      },
      en: {
        translation: {
          menuService: "Services",
          menuAboutMe: "About me",
          menuReviews: "Reviews",
          menuContact: "Contact",
          getConsultation: "Reservation or inquiry",
          serviceText:
            "I offer accurate, reliable and affordable translation and interpretation from Japanese to English and vice versa. I also work with such language pairs as English-Ukrainian, Japanese-Ukrainian and English-Russian if needed.",
          writtenTranslation: "Written translation",

          general: "General",
          scientific: "Scientific",
          medical: "Medical",
          legal: "Legal",
          publishingHouse: "Translation of the publishing house",

          oral: "Oral (consecutive) translation",
          online: "Online",
          interview: "Interview, report",
          business: "Business",
          conference: "Scientific conference",
          negotiations: "Political negotiations",
          conversation: "Simple conversation on general topics",

          spot: "On the spot",
          television: "Television, mass media, radio",
          socialProjects: "Social projects and organizations",
          accompanying: "Accompanying translation",

          videoTranslation: "Video translation",
          subtitles: "Translation of subtitles",
          transcription: "Transcription of video into text",
          voicing: "Voicing",

          order: "Order",
          fromWrittenTranslation: "From 33 $",
          fromOralOnline: "From 15$",
          fromOralSpot: "From 33$",
          fromVideoTranslation: "From 13$",
        },
      },
      jp: {
        translation: {
          menuService: "サービス",
          menuAboutMe: "私について",
          menuReviews: "お客様の声",
          menuContact: "ご予約",
          getConsultation: "ご予約・お問い合わせ",
          serviceText:
            "丁寧で自然な正しい　日本語、ウクライナ語、英語、ロシア語　の翻訳・通訳を格安で提供しております。",
          writtenTranslation: "翻訳",

          general: "一般文書",
          scientific: "技術",
          medical: "医療",
          legal: "法律・契約",
          publishingHouse: "出版翻訳",

          oral: "通訳（逐次通訳）",
          online: "オンライン",
          interview: "インタビューや取材など",
          business: "ビジネス",
          conference: "科学会議",
          negotiations: "政治交渉",
          conversation: "一般の話",

          spot: "通訳（逐次通訳）",
          television: "現地で",
          socialProjects: "テレビ、ラジオ ソーシャルプロジェクト",
          accompanying: "同行通訳",

          videoTranslation: "映像翻訳",
          subtitles: "字幕翻訳",
          transcription: "文字起こし",
          voicing: "吹き替え翻訳",

          order: "ご予約",
          fromWrittenTranslation: "（一文字）13円から",
          fromOralOnline: "2500円から",
          fromOralSpot: "5000円から",
          fromVideoTranslation: "2000円から",
        },
      },
    },
  });

export default i18n;
