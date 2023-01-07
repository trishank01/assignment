import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./HeroSection.module.css";
import HeroSectionImg from "../Assets/ILLUSTRATION.png";
import { BiSearchAlt2 } from 'react-icons/bi';

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
    </div>
  );
};

export default HeroSection;
