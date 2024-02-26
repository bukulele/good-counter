import React, { useEffect, useState } from "react";
import styles from "./goodInputArea.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

function GoodInputArea() {
  const MAX_INPUT_LENGTH = 80;
  const [charLeft, setCharLeft] = useState(MAX_INPUT_LENGTH);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const addAction = () => {
    console.log("ADD ACTION");
  };

  useEffect(() => {
    let inputLength = inputValue.length;
    setCharLeft(MAX_INPUT_LENGTH - inputLength);
  }, [inputValue]);

  return (
    <div className={styles.goodInputAreaContainer}>
      <div className={styles.goodActionTextInputContainer}>
        <input
          placeholder="Опишите, что сделали сегодня хорошего."
          type="text"
          className={styles.goodActionTextInput}
          maxLength={MAX_INPUT_LENGTH}
          onChange={handleInput}
          value={inputValue}
        ></input>
        <div className={styles.charLeft}>{charLeft}</div>
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
