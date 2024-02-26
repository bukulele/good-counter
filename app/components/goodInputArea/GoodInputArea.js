import React from "react";
import styles from "./goodInputArea.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

function GoodInputArea() {
  const addAction = () => {
    console.log("ADD ACTION");
  };
  return (
    <div className={styles.goodInputAreaContainer}>
      <div className={styles.goodActionTextInputContainer}>
        <input
          placeholder="Опишите, что сделали сегодня хорошего."
          type="text"
          className={styles.goodActionTextInput}
        ></input>
      </div>
      <Button
        content={<FontAwesomeIcon icon={faSeedling} size="3x" />}
        func={addAction}
        style={"addGoodActionButton"}
      />
    </div>
  );
}

export default GoodInputArea;
