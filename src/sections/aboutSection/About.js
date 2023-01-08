import React from "react";
import play from "../../Assets/Group 117.png";
import bgCornerHalfCircle from "../../Assets/Group 100.png";
import styles from "./About.module.css";
import AboutCard from "../../components/AboutCard/AboutCard";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.DetailsWrapper}>
        <p className={styles.subHeading}>
          Watch the video about UAE or Offshore Company Registration{" "}
          <span>
            {" "}
            <img src={play} alt="" />{" "}
          </span>{" "}
        </p>
        <h1 className={styles.heading}>
          {" "}
          <span className={styles.border}>Dedicated</span> to our mission we are
        </h1>
        <p className={styles.paragraph}>
          Our services include Company Formation & Renewals, Trust & Fiduciary,
          Tax Residency Setup With Family, Bank Accounts, Remote Management,
          Stock Trading Platforms, Ownership Solutions
        </p>
        <div className={styles.bgCircleGroup}>
          <img className={styles.bgCornerHalfCircle} src={bgCornerHalfCircle} alt="bgCornerHalfCircle" />
        </div>
      </div>
      <div>
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
