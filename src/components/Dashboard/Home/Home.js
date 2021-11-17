import React from "react";
import IcTotalDibaca from "../../../assets/ic_article_dashboard.png";
import IcTotalARticle from "../../../assets/ic_total_article.png";
import IcTotalVoltage from "../../../assets/ic_voltage.png";
import IcFlashBlue from "../../../assets/ic_flash_blue.png";
import Card from "../../UI/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__firstContent}>
        <Card className={styles.home__firstContentItem}>
          <img src={IcTotalARticle} alt="" />
          <div className={styles.home__firstItem}>
            <p>Total Artikel</p>
            <h2>78</h2>
          </div>
        </Card>
        <Card className={styles.home__firstContentItem}>
          <img src={IcTotalDibaca} alt="" />
          <div className={styles.home__firstItem}>
            <p>Total Dibaca</p>
            <h2>55</h2>
          </div>
        </Card>
      </div>
      <Card className={styles.home__secondContent}>
        <img src={IcTotalVoltage} alt="" />
        <div className={styles.home__secondContentList}>
          <div >
            <p>Total Daya</p>
            <h2>2300</h2>
            <img src={IcFlashBlue} alt="" />
          </div>
          <div>
            <p>Voltase Ampere</p>
            <h2>1300</h2>
            <img src={IcFlashBlue} alt="" />
          </div>
          <div>
            <p>Watt</p>
            <h2>100</h2>
            <img src={IcFlashBlue} alt="" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
