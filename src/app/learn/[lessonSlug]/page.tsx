import React from "react";
import { redirect } from "next/navigation";

import lessonApi from "@/api/lesson";

import CloseIcon from "@/assets/icons/close.svg";

import Container from "@/components/Container";
import Typography from "@/components/Typography";

import styles from "./page.module.scss";
import classNames from "classnames/bind";
import InputAnswer from "@/components/InputAnswer";
import LearnBody from "@/components/LearnBody";

export interface ILearnPageProps {
  params: { lessonSlug: string };
}

const cx = classNames.bind(styles);

const LearnPage = async ({ params }: ILearnPageProps) => {
  const lesson = await lessonApi.getLesson(params.lessonSlug);

  if (!lesson) redirect("/404");

  return (
    <Container className={cx("learn")}>
      <header className={cx("learn__header")}>
        <Typography tag="h1" size="big">
          {lesson.name}
        </Typography>

        <button className={cx("learn__close-btn")}>
          <CloseIcon />
        </button>
      </header>

      <LearnBody terms={lesson.terms} />
    </Container>
  );
};

export default LearnPage;
