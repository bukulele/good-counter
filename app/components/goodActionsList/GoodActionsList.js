import React from "react";
import styles from "./goodActionsList.module.css";
import GoodAction from "./goodAction/GoodAction";

function GoodActionsList({ chosenDate, myActions }) {
  return (
    <div className={styles.goodActionsListContainer}>
      <div className={styles.goodActionsList}>
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
        <GoodAction myActions={myActions} />
      </div>
    </div>
  );
}

export default GoodActionsList;
