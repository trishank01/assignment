import React from "react";
import styles from "./AboutCard.module.css"
import dungeon from "../../Assets/dungeon.png"
import crown from "../../Assets/Vector-2.png"
import office from "../../Assets/Vector-3.png"

const dataList = [
  {
    id : 1,
    image : dungeon,
    heading : "UAE Free Zone Company",
    paragraph : "Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE.",
    action : "Get Started"
  },
  {
    id : 2,
    image : crown,
    heading : "Dubai Local Companies",
    paragraph : "The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today.",
    action : "Get Started"
  },
  {
    id : 3,
    image : office,
    heading : "Offshore Compamies",
    paragraph : "You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process",
    action : "Get Started"
  }
]

const AboutCard = () => {
  return (
    <div className={styles.wrapper}>
        {dataList.map((item) => {
          return (
            <div key={item.id} className={styles.itemWrapper}>
              <img src={item.image} alt="dungeon"/>
              <h2 className={styles.heading}>{item.heading}</h2>
              <p className={styles.paragraph}>{item.paragraph}</p>
              <span >{item.action}</span>
            </div>
          )
        })}
    </div>
  );
};

export default AboutCard;
