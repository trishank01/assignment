import React, { useState } from "react";
import logo from "../../Assets/Group 114.png";
import styles from "./HeaderNavBar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const HeaderNavBar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menuWrapper}>
        <span className={styles.navMenu}>Home</span>
        <span className={styles.navMenu}>Services</span>
        <span className={styles.navMenu}>Price</span>
        <span className={styles.navMenu}>About Us</span>
        <button className={styles.btn}>Start a Company</button>
      </div>
      <div className={styles.mobileMenuGroup}>
        <div className={styles.mobileMenuIcon}>
          {!isMenuOpen && (
            <AiOutlineMenu size={28} onClick={() => setisMenuOpen(true)} />
          )}

          {isMenuOpen && (
            <AiOutlineClose size={28} onClick={() => setisMenuOpen(false)} />
          )}
        </div>

        {isMenuOpen && (
          <div className={styles.menuMobileWrapper}>
            <span className={styles.navMenu}>Home</span>
            <span className={styles.navMenu}>Services</span>
            <span className={styles.navMenu}>Price</span>
            <span className={styles.navMenu}>About Us</span>
            <button className={styles.btn}>Start a Company</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderNavBar;
