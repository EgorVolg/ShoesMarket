import React from "react";
import styles from "./Header.module.scss";
import { Routes, Route, Link } from "react-router-dom";

export default function Header({ onClickCard }) {
  return (
    <header className={styles.header}>
      <div className={styles.header_div}>
        <Link to="/">
          <img className={styles.header_logo} src="/image/logo.png" alt="" />
        </Link>
        <div className={styles.headerInfo}>
          <h3 className={styles.h3_header_info}>Sneakers</h3>
          <p className={styles.p_header_info}>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.header_ul}>
        <li className={styles.header_li} onClick={onClickCard}>
          <img height={30} width={30} src="/image/cart.svg" alt="cart" />

          {/* <span>1200 p</span> */}
        </li>

        <li className={styles.header_li}>
          <Link to="./Favorites">
            <img height={30} width={30} src="/image/heart.svg" alt="heart" />
          </Link>
        </li>

        <li className={styles.header_li}>
          <img height={30} width={30} src="/image/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
