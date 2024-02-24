import React from "react";
import styles from "./button.module.css";

function Button({ content, func, style }) {
  return (
    <div onClick={func} className={`${styles.button} ${styles[style]}`}>
      {content}
    </div>
  );
}

export default Button;
