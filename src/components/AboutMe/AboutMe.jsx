import styles from "./AboutMe.module.scss";
import irina2 from "../../assets/images/irina2.jpg";
import irina3 from "../../assets/images/irina3.jpg";
import document1 from "../../assets/images/document1.jpg";
import document2 from "../../assets/images/document2.jpg";
import { Trans, useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className={styles.about_me}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t("aboutMeTitle")}</h2>

          <div className={styles.images_container}>
            <figure>
              <img className={styles.image} src={irina2} alt="my" />
              <Trans i18nKey={"aboutMe"}>
                <figcaption>
                  はじめまして、イリーナ・デルガチョワと申します。2014
                  年から日本語、英語、ウクライナ語、ロシア語の翻訳者および通訳者として活動しています。一般翻訳、法律翻訳、医療翻訳、科学翻訳、社会翻訳、ビジネス翻訳の経験があります。
                  通訳と書面翻訳の両方を提供しています。 ウクライナの 2
                  つの大学を卒業しました。スコヴォロダ記念ハルキウ国立教育大学（学士）です。
                  そして、タラス・シェフチェンコ記念キーウ国立大学（修士）です。日本語、英語の翻訳を専攻していました。
                  私は日本語能力試験N1（最上級）の証明書を持っています。
                  <p>
                    キーウ市で行われた日本語スピーチコンテストで優勝し、そのおかげで2015年に国際交流基金（大阪）の研修プログラムで初めて日本に行くことができました。
                  </p>
                  <p>
                    2016年から2018年まで、私はドラホマノフ州立大学で日本語講師として働いていました。
                  </p>
                  <p>
                    2019年から日本にある名古屋専門学校の留学生支援室で教職員として働いていました。
                  </p>
                </figcaption>
              </Trans>
            </figure>

            <figure>
              <img className={styles.image} src={irina3} alt="my" />
              <Trans i18nKey={"aboutMe2"}>
                <figcaption>
                  <p>
                    2020年5月から2021年7月まで、日本のIT企業Demand-Linkで翻訳者兼Webデザイナーとして働いていました。
                  </p>
                  <p>
                    2022年から日本の翻訳会社であるラインゲート、サンフレア、インターグループ、フランシールと協力してきました。
                    TBSチャンネルの国際報道部で働いていました。
                    さらに、NPOクライヤニー、CINGA、FRJ、アルペ難民センター、みなと国際協会（MIA）などのNGOや難民支援団体の翻訳も担当しています。
                    翻訳と人々とのコミュニケーションにおいて豊富な経験があります。
                  </p>
                  <p>
                    2023年にはボランティアで日本語を教えるチャリティープロジェクト「日本語とハート」を立ち上げました。
                    ウクライナ文化の普及に携わっており、特にウクライナ料理の作り方とクロスステッチ刺繍を教えています。
                    感情的知性トレーナーの資格と第 2
                    級レイキエネルギーヒーリングの資格を持っています。
                  </p>
                </figcaption>
              </Trans>
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
