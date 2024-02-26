"use client";

import React, { useState } from "react";
import Button from "./components/button/Button";
import Calendar from "./components/calendar/Calendar";
import GoodActionsList from "./components/goodActionsList/GoodActionsList";
import GoodInputArea from "./components/goodInputArea/GoodInputArea";
import styles from "./page.module.css";

export default function Home() {
  const [actionsFilter, setActionsFilter] = useState("all");

  return (
    <main className={styles.main}>
      <div className={styles.goodActionInput}>
        <Calendar />
        <div className={styles.goodActionsContainer}>
          <GoodInputArea />
          <GoodActionsList chosenDate={null} myActions={true} />
        </div>
      </div>
      <div className={styles.whatCanIDoContainer}>
        <p className={styles.whatCanIDoHeader}>Что я могу сделать?</p>
        <div className={styles.whatCanIDoFilter}>
          <Button
            content={"Очень простое"}
            func={() => setActionsFilter("superEasy")}
            style={"filterSuperEasy"}
          />
          <Button
            content={"Простое"}
            func={() => setActionsFilter("easy")}
            style={"filterEasy"}
          />
          <Button
            content={"Посложнее"}
            func={() => setActionsFilter("hard")}
            style={"filterHard"}
          />
        </div>
        <GoodActionsList />
      </div>
    </main>
  );
}
