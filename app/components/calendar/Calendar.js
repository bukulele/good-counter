import React, { useEffect, useState } from "react";
import styles from "./calendar.module.css";
import CalendarDate from "./CalendarDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAngleLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";

function Calendar() {
  const [calendarDates, setCalendarDates] = useState(null);
  const [todayDate, setTodayDate] = useState(new Date());
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  // const todayDate = new Date();

  const placeDate = (date) => {
    return <CalendarDate key={`date_${date}`} date={date} />;
  };

  const fulfillCalendar = () => {
    let currentCalendarDate = new Date(Number(todayDate));
    const month = currentCalendarDate.getMonth();
    currentCalendarDate.setDate(1);
    let calendarDaysArr = [];
    while (currentCalendarDate.getMonth() === month) {
      let calendarDate = placeDate(Number(currentCalendarDate));
      calendarDaysArr.push(calendarDate);
      currentCalendarDate.setDate(currentCalendarDate.getDate() + 1);
    }
    setCalendarDates(calendarDaysArr);
  };

  const minusYear = () => {
    let newDate = new Date(Number(todayDate));
    newDate = newDate.setFullYear(newDate.getFullYear() - 1);
    setTodayDate(new Date(newDate));
  };
  const minusMonth = () => {
    let newDate = new Date(Number(todayDate));
    newDate = newDate.setMonth(newDate.getMonth() - 1);
    setTodayDate(new Date(newDate));
  };
  const plusMonth = () => {
    let newDate = new Date(Number(todayDate));
    newDate = newDate.setMonth(newDate.getMonth() + 1);
    setTodayDate(new Date(newDate));
  };
  const plusYear = () => {
    let newDate = new Date(Number(todayDate));
    newDate = newDate.setFullYear(newDate.getFullYear() + 1);
    setTodayDate(new Date(newDate));
  };

  useEffect(fulfillCalendar, [todayDate]);

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarControls}>
        <Button
          content={<FontAwesomeIcon icon={faAnglesLeft} />}
          style={"calendarControlArrow"}
          func={minusYear}
        />
        <Button
          content={<FontAwesomeIcon icon={faAngleLeft} />}
          style={"calendarControlArrow"}
          func={minusMonth}
        />
        {months[todayDate.getMonth()]} {todayDate.getFullYear()}
        <Button
          content={<FontAwesomeIcon icon={faAngleRight} />}
          style={"calendarControlArrow"}
          func={plusMonth}
        />
        <Button
          content={<FontAwesomeIcon icon={faAnglesRight} />}
          style={"calendarControlArrow"}
          func={plusYear}
        />
        <div>Today</div>
      </div>
      <div className={styles.calendarGrid}>
        {weekDays.map((day) => (
          <div key={`dayName_${day}`} className={styles.dayName}>
            {day}
          </div>
        ))}
        {calendarDates}
      </div>
    </div>
  );
}

export default Calendar;
