import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={598}
        height={142}
        className={styles.logo}
      />
      <div className={styles.counters}>
        <div className={styles.counter}>Добрых дел всего: 123</div>
        <div className={styles.counter}>Моих добрых дел: 123</div>
      </div>
    </div>
  );
}

export default Navbar;
