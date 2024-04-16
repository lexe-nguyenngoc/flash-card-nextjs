import React from "react";

import styles from "./Lesson.module.scss";
import Link from "next/link";

interface ILesson {
  name: string;
  slug: string;
  wordsCount: number;
}

const Lesson = ({ name, wordsCount, slug }: ILesson) => {
  return (
    <Link href={`/course/${slug}`} className={styles.wrapper}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles["word-count"]}>
        {wordsCount} {wordsCount > 1 ? "words" : "word"}
      </div>
    </Link>
  );
};

export default Lesson;
