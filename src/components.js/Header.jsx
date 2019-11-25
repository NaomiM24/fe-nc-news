import React from "react";
import { Link } from "@reach/router";
import styles from "../css modules/Header.module.css";
import home from "../home-icon.svg";

const Header = ({selectedUser}) => {
  return (
    <header>
      <Link to="/" className={styles.home}>
        <img src={home} alt="Home" />
      </Link>
      <h1>northcoders news</h1>

    </header>
  );
};

export default Header;
