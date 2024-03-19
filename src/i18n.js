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
          menuProjects: "Проекти",

          close: "Закрити",

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

          projectTextEng:
            "Проект вивчення англійської мови “English for Earth Citizen” - “Англійська для громадян Землі”. Уроки англійської для закордонних подорожей, роботи за кордоном, взаємодії з іноземцями, міжнародного бізнесу, проектів, трансляцій та підприємців. Будь ласка, зв'яжіться зі мною, якщо ви зацікавлені.",
          projectTitleUA: "Українська культура",
          projectTextUA:
            "Також приймаються заявки на уроки української кулінарії, майстер-класи з вишивання, виступи тощо в Японії. Будь ласка, зв'яжіться з нами.",
          projectTitleVolunteer: "Японська з серцем",
          projectTextVolunteer:
            "Доєднуйтеся до волонтерської групи з вивчення японської мови “Японська з серцем”. Будь ласка, зв'яжіться з нами.",
          getInTouch: "Зв'язатися",

          userName1: "Хідео Накамура",
          userName2: "Курода",
          userName3: "Дайсаку Йошімура",
          userName4: "Іноуе",
          userPosition1:
            "Загальний фонд асоціації народної музики MIN-ON Штаб планування Плановий відділ",
          userPosition2: "Професор, Педагогічний університет Кіото",
          userPosition3: "Директор-представник ТОВ “NextAge Inc.”",
          userPosition4: "Репортер TBS",
          questions1: "Як ви мене знайшли?",
          questions2: "Чому ви звернулися до мене?",
          questions3:
            "Чи було це корисно? Ви змогли вирішити проблему? Ви задоволені результатами?",
          questions3NextAge:
            "Чи було це корисно для NextAge? Ви змогли вирішити проблему? Ви задоволені результатами?",
          questions4: "Чи було це корисно для Відділу міжнародних новин?",
          replies1:
            "По рекомендації директора НВО Японсько-Української Культурної Асоціації.",
          replies2:
            "Це сталося через те, що нам потрібен був український перекладач для японського виступу Національного заслуженого академічного ансамблю танцю України імені Павла Вірського, спонсорованого нашою організацією.",
          replies3:
            "Пройшов двомісячний тур і протягом цього часу перекладач Ірина ретельно піклувалася про те, щоб учасники з України могли спокійно перебувати в Японії, а також перекладала на офіційних заходах. Ми дуже задоволені успішними виступами танцювального колективу. Ще раз дякую за ваші зусилля і турботу.",
          replies4:
            "Коли ми шукали перекладача українською спільно з NextAge Inc., Ірина запропонувала нам роботу. Після цього Ірина очолила пошук близько 10 перекладачів через соціальні мережі.",
          replies5:
            "Ми шукали перекладача, який би володів японською та українською мовами, щоб допомогти українським дітям, евакуйованим по всьому світу, з арифметикою та математикою рідною мовою.",
          replies6:
            "Перекладач Ірина брала участь у систематичному перекладі приблизно 600 відеофільмів з арифметики та математики для учнів від початкової школи до старшокласників. Ці зусилля висвітлювалися засобами масової інформації та отримали кілька нагород і ми надзвичайно вдячні за її цілеспрямований внесок.",
          replies7: "Дізнався про Ірину від українських біженців.",
          replies8:
            "Під час розмови з організацією з України, яка отримала Нобелівську премію миру, ми попросили переклад українською та японською мовами.",
          replies9:
            "Я міг спокійно спілкуватися з українцями. Ірина добре знає японську мову, тому її японську мову легко зрозуміти. Я завжди консультуюся з пані Дергачовою, коли спілкуюся з українцями.",
          replies10:
            "Це запит на усний, транскрипційний та відеопереклад з української та російської мови на японську.",
          replies11:
            "Ірина неодноразово приходила до нас в офіс, і завжди працювала дуже акуратно. Коли я побачив переклад довгого запису з української на японську мову, я подумав, що її здібності до японської мови дуже високі. Вона також надала ретельні нотатки та пояснення довідок. Швидкість роботи також була високою. Її навички спілкування були чудовими, вона належним чином розуміла наші прохання та виконувала роботу.",

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
          menuProjects: "Projects",

          close: "Close",

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

          projectTextEng:
            "Project “English for Earth Citizen”. English lessons for overseas travel, overseas work, interaction with foreigners, international business, international projects, streaming for overseas, and international entrepreneurs. Please contact me if you are interested.",
          projectTitleUA: "Ukrainian culture",
          projectTextUA:
            "We also accept requests for Ukrainian cooking classes, embroidery workshops, speeches, etc. in Japan. Please contact us.",
          projectTitleVolunteer: "Japanese with Heart",
          projectTextVolunteer:
            "Join the volunteer Japanese language learning group 'Japanese with Heart'. Please contact us.",
          getInTouch: "Get in touch",

          userName1: "Hideo Nakamura",
          userName2: "Kuroda",
          userName3: "Daisaku Yoshimura",
          userName4: "Inoue",
          userPosition1:
            "National Music Association General Incorporated Foundation Planning Headquarters Planning Department",
          userPosition2: "Professor of Kyoto University of Education",
          userPosition3: "NextAge Co., Ltd. Representative Director",
          userPosition4: "TBS reporter",
          questions1: "How did you find me?",
          questions2: "Why did you contact me?",
          questions3:
            "Was it helpful? Were you able to solve the problem? Are you happy with the results?",
          questions3NextAge:
            "Was it useful for NextAge? Were you able to solve the problem? Are you happy with the results?",
          questions4: "Was it useful for the International News Department?",
          replies1:
            "On the recommendation of the director of the NGO of the Japanese-Ukrainian Cultural Association.",
          replies2:
            "This happened because we needed a Ukrainian translator for the Japanese performance of the National Honored Academic Dance Ensemble of Ukraine named after Pavlo Virsky, sponsored by our organization.",
          replies3:
            "The two-month tour took place, and during this time, the translator Iryna carefully ensured that the participants from Ukraine could stay peacefully in Japan, and also translated at official events. We are very pleased with the successful performances of the dance team. Thank you again for your efforts and care.",
          replies4:
            "When we were looking for a Ukrainian translator together with NextAge Inc., Iryna offered us a job. After that, Iryna led the search for about 10 translators through social networks.",
          replies5:
            "We were looking for a Japanese and Ukrainian translator to help Ukrainian children evacuated around the world with arithmetic and mathematics in their native language.",
          replies6:
            "Translator Iryna participated in the systematic translation of approximately 600 video films on arithmetic and mathematics for students from elementary school to high school students. These efforts have received media coverage and several awards, and we are extremely grateful for her dedicated contributions.",
          replies7: "Learned about Iryna from Ukrainian refugees.",
          replies8:
            "During a conversation with an organization from Ukraine that won the Nobel Peace Prize, we asked for a translation into Ukrainian and Japanese.",
          replies9:
            "I could easily communicate with Ukrainians. Iryna knows Japanese well, so her Japanese is easy to understand. I always consult with Mrs. Dergacheva when I communicate with Ukrainians.",
          replies10:
            "This is a request for oral, transcription and video translation from Ukrainian and Russian into Japanese.",
          replies11:
            "Iryna came to our office many times, and always worked very neatly. When I saw the translation of a long recording from Ukrainian to Japanese, I thought that her Japanese language skills are very high. She also provided thorough notes and explanations of references. The speed of work was also high. Her communication skills were excellent, she understood our requests properly and got the job done.",

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
          menuProjects: "プロジェクト",

          close: "近い",

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
          conference: "演説や会議",
          negotiations: "政治交渉",
          conversation: "一般の話",

          spot: "現地で",
          television: "テレビ、ラジオ、SNS",
          socialProjects: "ソーシャルプロジェクト",
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

          projectTextEng:
            "地球市民になるための英語“English for Earth Citizen”。海外旅行、海外の仕事、外国人との交流、国際業務、インタナショナルプロジェクト、海外への配信、国際起業家のための英語のレッスンです。ご興味をお持ちの方は お問い合わせください。",
          projectTitleUA: "ウクライナの文化",
          projectTextUA:
            "日本でウクライナ料理教室や刺繍ワークショップ、演説などのご依頼も承ります。お問い合わせください。",
          projectTitleVolunteer: "心ある日本語",
          projectTextVolunteer:
            "現在はウクライナからの避難民に日本語を教えています。 ボランティア日本語学習グループ「心ある日本語」にサポートやご協力が必要です。お問い合わせください。",
          getInTouch: "連絡する",

          userName1: "中村　英夫",
          userName2: "黒田",
          userName3: "吉村大作",
          userName4: "井上 ",
          userPosition1: "一般財団法人民主音楽協会企画本部　企画部",
          userPosition2: "京都教育大学　教授　",
          userPosition3: "ネクストエージ株式会社　代表取締役",
          userPosition4: "記者　TBS",
          questions1: "どうやって私を見つけましたか？",
          questions2: "何のために私に問い合わせしたのか？",
          questions3:
            "役に立ちましたか？問題の解決はできましたか？結果に満足していますか？",
          questions3NextAge:
            "ネクストエージに役に立ちましたか？問題の解決はできましたか？結果に満足していますか？",
          questions4: "外信部に役立ちましたか？",
          replies1: "NPO法人日本ウクライナ文化協会の理事長からのご推薦です。",
          replies2:
            "当会主催の「ウクライナ国立民族舞踊団パブロ・ヴィルスキー」日本公演における、ウクライナ語の通訳を必要としたためです。",
          replies3:
            "２か月にわたるツアーのうち、およそ半分の行程について頂きました。その中での、ウクライナからきた団員が安心して日本に滞在できるよう、細かなケアに心を砕いて頂いたり、公式行事での通訳にもご尽力頂きました。私どもの、舞踊団側のたいへんに満足しております。改めてご尽力に感謝申し上げます。",
          replies4:
            "株式会社ネクストエージと共同で、ウクライナ語への翻訳者を探していたところ、イリーナさんの方が申し出てくれました。その後、イリーナさんが中心となって、SNSを通して約１０名の翻訳者を探してくれました。",
          replies5:
            "世界中に避難するウクライナの子どもの母語での算数・数学支援のために、日本語とウクライナ語ができる翻訳者を探していました。",
          replies6:
            "小学校から高校までの算数・数学内容の動画約６００本を、組織的に翻訳することに貢献してくれました。 これらの取り組みは、以下のようにマスコミ各社で取り上げられたり、いくつかの賞をいただくことができ、その献身的な貢献に非常に感謝しています。",
          replies7: "ウクライナ避難民からの紹介。",
          replies8:
            "ノーベル平和賞受賞団体との対談の際に、ウクライナ語と日本語の通訳を依頼しました。",
          replies9:
            "円滑にウクライナ人の方々とのコミュニケーションができました。日本語のスキルも高いので日本語も分かりやすいです。ウクライナ人の方々とのコミュケーションの際には、その都度デルガチョワさんに相談したいと思います。",
          replies10:
            "ウクライナ語とロシア語の通訳、文字起こし、映像翻訳の依頼です。",
          replies11:
            "イリーナさんには何度も会社に来ていただきましたが、いつもとても丁寧に作業してくださいました。長いウクライナ語の録音を日本語にしてくださった時に、訳文を拝見して、特に日本語のライティングの能力がとても高いと思いました。また丁寧に注釈や背景説明も記載してくれました。作業のスピードも早かったです。コミュニケーション力も素晴らしく、こちらの要望をきちんと理解して作業してくださいました。",

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
