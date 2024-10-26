import classNames from "classnames/bind";
import { redirect } from "next/navigation";

import FolderIcon from "@/assets/icons/folder.svg";

import lessonApi from "@/api/lesson";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import Activities from "@/components/Activities";
import TermsList from "@/components/TermsList";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

interface ICourseDetailProps {
  readonly params: { lessonSlug: string };
}

export default async function LessonDetail({ params }: ICourseDetailProps) {
  const lesson = await lessonApi.getLesson(params.lessonSlug);

  if (!lesson) return redirect("/404");

  return (
    <Container className={cx("lesson")}>
      <div className={cx("lesson__header")}>
        <div className={cx("lesson__folder")}>
          <FolderIcon />
          <Typography>{lesson.folder}</Typography>
        </div>
        <Typography tag="h1" size="big">
          {lesson.name}
        </Typography>
      </div>

      <Activities
        className={cx("lesson__activities")}
        slug={params.lessonSlug}
      />

      <TermsList terms={lesson.terms} />
    </Container>
  );
}
