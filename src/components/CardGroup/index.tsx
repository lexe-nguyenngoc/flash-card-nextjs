import React from "react";

import styles from "./CardGroup.module.scss";

interface ICardGroup {
  name: string;
  wordsCount: number;
}

const CardGroup = ({ name, wordsCount }: ICardGroup) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles["word-count"]}>
        {wordsCount} {wordsCount > 1 ? "words" : "word"}
      </div>
    </div>
  );
};

export default CardGroup;
