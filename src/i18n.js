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

          mainName: "Перекладач Ірина Дергачова",
          mainText:
            "Високоякісні переклади з/на японську та англійську мову. Викладання японської та англійської мови, майстер-класи.",
          getConsultation: "Отримати консультацію",
          serviceText:
            "Пропоную достовірний та якісний переклад з японської на українську, з української на японську, а також з української на англійську, з англійської на українську мову.",
          writtenTranslation: "Письмовий переклад",

          general: "Загальний",
          scientific: "Науковий",
          medical: "Медичний",
          legal: "Юридичний",
          publishingHouse: "Переклад видавництва",

          oral: "Усний (послідовний) переклад",
          online: "Онлайн",
          interview: "Інтерв’ю, репортаж",
          business: "Бізнес зустрічі",
          conference: "Лекції та конференції",
          negotiations: "Політичні перемовини",
          conversation: "Проста розмова на загальні теми",

          spot: "На місці",
          television: "Телебачення, ЗМІ, радіо",
          socialProjects: "Соціальні проекти",
          accompanying: "Супровідний переклад",

          videoTranslation: "Переклад відео",
          subtitles: "Переклад субтитрів",
          transcription: "Транскрипція",
          voicing: "Озвучування",

          order: "Замовити",
          fromWrittenTranslation: "Від 500 грн",
          fromOralOnline: "Від 600 грн",
          fromOralSpot: "Від 1200 грн",
          fromVideoTranslation: "Від 500 грн",

          aboutMeTitle: "Про мене",
          aboutMe:
            "<0>Мене звати Дергачова Ірина, я перекладач з японської та англійської мов з 2014 року. Маю досвід в роботі з загальним, юридичним, медичним, науковим, соціальним і бізнес перекладом. Працюю як з усним перекладом, так і письмовим. Закінчила два університети в Україні - ХНПУ імені Г.С. Сковороди (бакалавр) та КНУ імені Т.Г. Шевченка (магістр) за спеціальністю японська та англійська мова і переклад. Маю сертифікат з рівню знання японської JLPT N1 (найвищий рівень).<p>Я переможець японського конкурсу промов у місті Київ, завдяки чому змогла вперше поїхати до Японії за дослідницькою програмою Japan Foundation (Osaka) у 2015 році.</p><p>2016 - 2018 працювала викладачем японської мови в університеті УДУ імені Драгоманова.</p><p>З 2019 року я працювала у Японії у коледжі в Нагої у відділі підтримки міжнародних студентів.</p></0>",
          aboutMe2:
            "<0><p>З травня 2020 по липень 2021 року - працювала перекладачем та веб-дизайнером в японській IT компанії Demand-Link.</p><p>З 2022 року співпрацюю з японськими перекладацькими конторами Linegate, Sunflare, Intergroup, Franchir. Працювала у відділі міжнародних новин на каналі TBS. Перекладала для НПО та організацій, що підтримують біженців NPO Kraiyany, CINGA, FRJ, Arrupe Refugee Center, Minato International Association (MIA). Я маю багатий досвід з перекладу і спілкування з людьми.</p><p>У 2023 р. створила благодійний проект “Японська з серцем”, де викладаю японську мову на волонтерських засадах. Займаюся поширенням української культури, зокрема викладаю приготування українських страв та вишивання хрестиком. Маю сертифікат тренера з емоційного інтелекту та 2 ступінь енергетичного зцілення Рейкі.</p></0>",
          reviews: "Відгуки",
          contact: "Контакти",
          city: "Японія",
          contactText: "Завжди рада бути вам корисною!",

          formName: "Ваше ім’я",
          formMail: "Ваша пошта",
          request: "Напишіть ваш запит",
          formSucces: "Форма успішно відправлена!",
          send: "Відправити",

          top: "Вгору",
        },
      },
      en: {
        translation: {
          menuService: "Services",
          menuAboutMe: "About me",
          menuReviews: "Reviews",
          menuContact: "Contact",

          mainName: "Translator and Interpreter Iryna Derhachova",
          mainText:
            "High quality translation from Japanese to English and communication",
          getConsultation: "Reservation or inquiry",
          serviceText:
            "I offer accurate, reliable and affordable translation and interpretation from Japanese to English and vice versa. I also work with such language pairs as English-Ukrainian, Japanese-Ukrainian and English-Russian if required.",
          writtenTranslation: "Written translation",

          general: "General",
          scientific: "Scientific",
          medical: "Medical",
          legal: "Legal",
          publishingHouse: "Translation of the publishing house",

          oral: "Oral (consecutive) translation",
          online: "Online",
          interview: "Interview, report",
          business: "Business meetings",
          conference: "Lectures and conferences",
          negotiations: "Political negotiations",
          conversation: "Simple conversation on general topics",

          spot: "On the spot",
          television: "Television, mass media, radio",
          socialProjects: "Social projects",
          accompanying: "Accompanying translation",

          videoTranslation: "Video translation",
          subtitles: "Translation of subtitles",
          transcription: "Transcription",
          voicing: "Voicing",

          order: "Order",
          fromWrittenTranslation: "From 33 $",
          fromOralOnline: "From 15$",
          fromOralSpot: "From 33$",
          fromVideoTranslation: "From 13$",

          aboutMeTitle: "About me",
          aboutMe:
            "<0>My name is Iryna Derhachova, I have been a Japanese, English, Ukrainian translator and interpreter since 2014. I have experience in working with general, legal, medical, scientific, social and business translation. I work with both oral and written translation. I graduated from two universities in Ukraine - Kharkiv National Pedagogical University named after H.S. Skovorody (bachelor) and Kyiv National University named after T.G. Shevchenko (master's degree) majoring in Japanese and English language and translation. I have a certificate of Japanese JLPT N1 (the highest level).<p>I am the winner of the Japanese speech contest in the city of Kyiv, thanks to which I was able to go to Japan for the first time under the research program of the Japan Foundation (Osaka) in 2015.</p><p>From 2016 to 2018, I worked as a Japanese language instructor at Drahomanov State University.</p><p>Since 2019, I have been working in Japan at a college in Nagoya in the international student support department.</p></0>",
          aboutMe2:
            "<0><p>From May 2020 to July 2021, I worked as a translator and web designer at the Japanese IT company Demand-Link.</p><p>Since 2022, I have been cooperating with Japanese translation agencies Linegate, Sunflare, Intergroup, Franchir. I worked in the international news department on the TBS channel. Furthermore I translated for NGOs and organizations supporting refugees: NPO Kraiyany, CINGA, FRJ, Arrupe Refugee Center, Minato International Association (MIA). I have extensive experience in translation and communication with people.</p><p>In 2023, I created the charity project 'Japanese with a heart', where I teach Japanese on a volunteer basis. I am involved in the spread of Ukrainian culture, in particular, I teach the preparation of Ukrainian dishes and cross-stitch embroidery. I have a certificate of an emotional intelligence trainer and a 2nd degree Reiki energy healing certificate.</p></0>",
          reviews: "Reviews",
          contact: "Contact",
          city: "Tokyo, Japan",
          contactText: "Do not hesitate to contact me! I am at your service!",

          formName: "Your name",
          formMail: "Your e-mail",
          request: "Your request",
          formSucces: "Your request has been successfully sent!",
          send: "Send",

          top: "TOP",
        },
      },
      jp: {
        translation: {
          menuService: "サービス",
          menuAboutMe: "私について",
          menuReviews: "お客様の声",
          menuContact: "ご予約",

          mainName: "翻訳者及び通訳者 イリーナ・デルガチョワ",
          mainText:
            "高品質のウクライナ語から日本語へ、日本語からウクライナ語への通訳や翻訳、または英語、ロシア語の通訳や翻訳を格安で提供しております。",
          getConsultation: "ご予約・お問い合わせ",
          serviceText:
            "丁寧で自然な正しい日本語⇔ウクライナ語、日本語⇔英語、日本語⇔ロシア語の翻訳・通訳を格安で提供しております。",
          writtenTranslation: "翻訳",

          general: "一般文書",
          scientific: "技術",
          medical: "医療",
          legal: "法律・契約",
          publishingHouse: "出版翻訳",

          oral: "通訳（逐次通訳）",
          online: "オンライン",
          interview: "インタビューや取材など",
          business: "ビジネスミーティング",
          conference: "科学会議",
          negotiations: "政治交渉",
          conversation: "一般の話",

          spot: "現地で",
          television: "テレビ、ラジオ、SNSソーシャルプロジェクト",
          socialProjects: "演説や会議",
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

          aboutMeTitle: "私について",
          aboutMe:
            "<0>はじめまして、イリーナ・デルガチョワと申します。2014 年から日本語、英語、ウクライナ語、ロシア語の翻訳者および通訳者として活動しています。一般翻訳、法律翻訳、医療翻訳、科学翻訳、社会翻訳、ビジネス翻訳の経験があります。 通訳と書面翻訳の両方を提供しています。 ウクライナの 2 つの大学を卒業しました。スコヴォロダ記念ハルキウ国立教育大学（学士）です。 そして、タラス・シェフチェンコ記念キーウ国立大学（修士）です。日本語、英語の翻訳を専攻していました。 私は日本語能力試験N1（最上級）の証明書を持っています。<p>キーウ市で行われた日本語スピーチコンテストで優勝し、そのおかげで2015年に国際交流基金（大阪）の研修プログラムで初めて日本に行くことができました。</p><p>2016年から2018年まで、私はドラホマノフ州立大学で日本語講師として働いていました。</p><p>2019年から日本にある名古屋専門学校の留学生支援室で教職員として働いていました。</p></0>",
          aboutMe2:
            "<0><p>2020年5月から2021年7月まで、日本のIT企業Demand-Linkで翻訳者兼Webデザイナーとして働いていました。</p><p>2022年から日本の翻訳会社であるラインゲート、サンフレア、インターグループ、フランシールと協力してきました。 TBSチャンネルの国際報道部で働いていました。 さらに、NPOクライヤニー、CINGA、FRJ、アルペ難民センター、みなと国際協会（MIA）などのNGOや難民支援団体の翻訳も担当しています。 翻訳と人々とのコミュニケーションにおいて豊富な経験があります。</p><p>2023年にはボランティアで日本語を教えるチャリティープロジェクト「日本語とハート」を立ち上げました。 ウクライナ文化の普及に携わっており、特にウクライナ料理の作り方とクロスステッチ刺繍を教えています。 感情的知性トレーナーの資格と第 2 級レイキエネルギーヒーリングの資格を持っています。</p></0>",
          reviews: "お客様の声",
          contact: "ご予約",
          city: "東京、日本",
          contactText: "お気軽にお問い合わせください。",

          formName: "お名前",
          formMail: "メール",
          request: "ご依頼",
          formSucces: "送信は成功しました。どうもありがとうございます。",
          send: "送信",

          top: "PAGETOP",
        },
      },
    },
  });

export default i18n;
