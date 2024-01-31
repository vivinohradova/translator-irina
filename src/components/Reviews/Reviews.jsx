import styles from "./Reviews.module.scss";
import CardReviews from "../CardReviews/CardReviews";
import { useState } from "react";

const usersData = [
  {
    id: 1,
    userName: "中村 英夫",
    userPosition: "般財団法人民主音楽協会企画本部 企画部",
    questions: [
      "どうやって私を見つけましたか？",
      "何のために私に問い合わせしたのか？",
      "役に立ちましたか？問題の解決はできましたか？結果に満足していますか？",
    ],
    replies: [
      "NPO法人日本ウクライナ文化協会の理事長からのご推薦です。",
      "当会主催の「ウクライナ国立民族舞踊団パブロ・ヴィルスキー」日本公演における、ウクライナ語の通訳を必要としたためです。",
      "２か月にわたるツアーのうち、およそ半分の行程について頂きました。その中での、ウクライナからきた団員が安心して日本に滞在できるよう、細かなケアに心を砕いて頂いたり、公式行事での通訳にもご尽力頂きました。私どもの、舞踊団側のたいへんに満足しております。改めてご尽力に感謝申し上げます。",
    ],
  },
  {
    id: 2,
    userName: "黒田",
    userPosition: "京都教育大学 教授",
    questions: [
      "どうやって私を見つけましたか？",
      "何のために私に問い合わせしたのか？",
      "プロジェクトに役に立ちましたか？問題の解決はできましたか？結果に満足していますか？",
    ],
    replies: [
      "株式会社ネクストエージと共同で、ウクライナ語への翻訳者を探していたところ、イリーナさんの方が申し出てくれました。その後、イリーナさんが中心となって、SNSを通して約１０名の翻訳者を探してくれました。",
      "世界中に避難するウクライナの子どもの母語での算数・数学支援のために、日本語とウクライナ語ができる翻訳者を探していました。",
      "小学校から高校までの算数・数学内容の動画約６００本を、組織的に翻訳することに貢献してくれました。これらの取り組みは、以下のようにマスコミ各社で取り上げられたり、いくつかの賞をいただくことができ、その献身的な貢献に非常に感謝しています。",
    ],
  },
  {
    id: 3,
    userName: "吉村大作",
    userPosition: "ネクストエージ株式会社 代表取締役",
    questions: [
      "私をどうやって見つけましたか？",
      "何のために私に問い合わせしたのか？",
      "ネクストエージに役に立ちましたか？問題の解決はできましたか？結果に満足していますか？",
    ],
    replies: [
      "ウクライナ避難民からの紹介。",
      "ノーベル平和賞受賞団体との対談の際に、ウクライナ語と日本語の通訳を依頼しました。",
      "円滑にウクライナ人の方々とのコミュニケーションができました。日本語のスキルも高いので日本語も分かりやすいです。ウクライナ人の方々とのコミュケーションの際には、その都度デルガチョワさんに相談したいと思います。",
    ],
  },
  {
    id: 4,
    userName: "井上",
    userPosition: "記者 TBS",
    questions: ["何のために？", "外信部に役立ちましたか？"],
    replies: [
      "ウクライナ語とロシア語の通訳、文字起こし、映像翻訳の依頼です。",
      "イリーナさんには何度も会社に来ていただきましたが、いつもとても丁寧に作業してくださいました。長いウクライナ語の録音を日本語にしてくださった時に、訳文を拝見して、特に日本語のライティングの能力がとても高いと思いました。また丁寧に注釈や背景説明も記載してくれました。作業のスピードも早かったです。コミュニケーション力も素晴らしく、こちらの要望をきちんと理解して作業してくださいました。",
    ],
  },
];

const Reviews = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : usersData.length - 1
    );
  };
  const handleNextClick = () => {
    setActiveCardIndex((nextIndex) =>
      nextIndex < usersData.length - 1 ? nextIndex + 1 : 0
    );
  };

  return (
    <>
      <section id="reviews" className={styles.reviews}>
        <div className={styles.container}>
          <h2>Відгуки</h2>
          <div className={styles.card_container}>
            <button className={styles.button} onClick={handlePrevClick}>
              &#60;
            </button>
            <CardReviews {...usersData[activeCardIndex]} />
            <button className={styles.button} onClick={handleNextClick}>
              &#62;
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
