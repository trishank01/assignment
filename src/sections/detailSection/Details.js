import React from "react";
import styles from "./Details.module.css";
import { cardList } from "../../utils/cardList";
import { BiRightArrowAlt } from "react-icons/bi";

const Details = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.upperSideDetails}>
        <p className={styles.para}>
          Learn the ways in which you can benefit from a UAE/Offshore Company.
          Then get started on fulfilling your UAE dream.
        </p>
        <p className={styles.actionClaim}>Claim a Free Quote</p>
      </div>
      {cardList.map((card) => {
        return (
          <div className={`${styles.card} ${card.id === 2 ? styles.cardMargin : ""} ${card.id === 4 ? styles.cardMargin : ""}`}>
            <img src={card.image} alt={card.image} />
            <p className={styles.heading}>{card.heading}</p>
            <p className={styles.paragraph}>{card.paragraph}</p>
            <p className={styles.action}>
              {card.action} <span> {card.icon} </span>{" "}
            </p>
          </div>
        );
      })}
      <div className={styles.lowerSideDetails}>
        <p className={styles.LowerSidepara}>
          We have gathered a team of professionals to craft adequate services
          you can rely on for a friction free setup in UAE.
        </p>
        <p className={styles.action}>
          More about our services
          <span>
            <BiRightArrowAlt />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Details;
