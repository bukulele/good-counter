import React from "react";
import styles from "./goodAction.module.css";

function GoodAction({ myActions }) {
  return (
    <div className={styles.goodActionContainer}>
      {myActions ? <div className={styles.date}>18 января 24</div> : null}
      <div className={styles.action}>
        СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА
        СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА СУПАФАЙТА
      </div>
    </div>
  );
}

export default GoodAction;
