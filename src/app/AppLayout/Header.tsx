import React from "react";
import styles from "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>SRS</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
