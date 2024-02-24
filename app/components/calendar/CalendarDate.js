import React, { useEffect, useState } from "react";
import styles from "./calendar.module.css";

function CalendarDate({ date }) {
  const [isToday, setIsToday] = useState(false);
  const today = new Date();
  let calendarDate = new Date(date);
  let currentMonthWeekDay =
    calendarDate.getDay() > 0 ? calendarDate.getDay() - 1 : 6;

  useEffect(() => {
    if (
      String(today.getDate()) +
        String(today.getMonth()) +
        String(today.getFullYear()) ===
      String(calendarDate.getDate()) +
        String(calendarDate.getMonth()) +
        String(calendarDate.getFullYear())
    ) {
      setIsToday(true);
    }
  }, []);

  return (
    <div
      className={styles.weekDay}
      style={{
        gridColumnStart: currentMonthWeekDay + 1,
        border: isToday ? "1px solid grey" : "none",
      }}
    >
      {calendarDate.getDate()}
    </div>
  );
}

export default CalendarDate;
