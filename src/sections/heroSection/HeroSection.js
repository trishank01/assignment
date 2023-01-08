import React from "react";
import styles from "./HeroSection.module.css";
import HeroSectionImg from "../../Assets/ILLUSTRATION.png";
import { BiSearchAlt2 } from 'react-icons/bi';
import Ellipse from "../../Assets/Ellipse 12.png"
import EllipseOrange from "../../Assets/Ellipse 15.png"
import EllipseLightGrey from "../../Assets/Ellipse 11.png"
import EllipseLightGreyBig from "../../Assets/Ellipse 13.png"

const HeroSection = () => {
  


  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <p className={styles.sub_heading}>Claim a Free Quote</p>
        <h1 className={styles.heading}>
          {" "}
          <span className={styles.border}>Get started</span> on fulfilling your
          Dubai or UAE dream.
        </h1>
        <img className={styles.imgMobile} src={HeroSectionImg} alt="HeroSectionImg" />
        <p className={styles.sub_heading}>UAE & Offshore Company</p>
        <p className={styles.paragraph}>
          We provide you with information about UAE or Offshore Company
          Registration & help you setup your company with a bank account and
          visas.
        </p>
        <div className={styles.btnWrapper}>
        <button className={`${styles.btn} ${styles.btnbgblue}`}>Start a Company</button>
        <button className={`${styles.btn} ${styles.btnbgWhite}`}>Renew a Company</button>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.InputWrapper}>
           <BiSearchAlt2 className={styles.icon}/>
          <input type="text"  className={styles.input} placeholder="Search a Term | Topic
"/>
        </div>
        <img className={styles.img} src={HeroSectionImg} alt="HeroSectionImg" />
      </div>
      <div className={styles.bgCircleGroup}>
             <img className={styles.bgCircle1} src={Ellipse} alt="Ellipse"/>
             <img className={styles.bgCircle2} src={EllipseOrange} alt="Ellipse"/>
             <img className={styles.bgCircle3} src={EllipseLightGrey} alt="Ellipse"/>
             <img className={styles.bgCircle4} src={EllipseLightGreyBig} alt="Ellipse"/>
        </div>
    </div>
  );
};

export default HeroSection;
