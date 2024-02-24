"use client";

import Calendar from "./components/calendar/Calendar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Calendar />
    </main>
  );
}
