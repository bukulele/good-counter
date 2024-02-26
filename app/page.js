"use client";

import Calendar from "./components/calendar/Calendar";
import GoodInputArea from "./components/goodInputArea/GoodInputArea";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.goodActionInput}>
        <Calendar />
        <GoodInputArea />
      </div>
    </main>
  );
}
