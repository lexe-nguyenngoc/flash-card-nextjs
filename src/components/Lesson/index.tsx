import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";

import { ILesson } from "@/types/lesson";

import Typography from "@/components/Typography";

import LessonIcon from "@/assets/icons/lesson.svg";

import styles from "./Lesson.module.scss";
import utils from "@/utils";

const cx = classNames.bind(styles);

interface ILessonProps {
  lesson: ILesson;
}

const Lesson = ({ lesson }: ILessonProps) => {
  return (
    <Link href={`/lessons/${lesson.slug}`} className={cx("wrapper")}>
      <LessonIcon />
      <div>
        <Typography className={cx("wrapper__name")} size="regular-bold">
          {lesson.name}
        </Typography>
        <Typography className={cx("wrapper__description")} size="regular-bold">
          Lesson - {utils.pluralize("term", lesson.amountTerm)} - author:{" "}
          {lesson.author}
        </Typography>
      </div>
    </Link>
  );
};

export default Lesson;
