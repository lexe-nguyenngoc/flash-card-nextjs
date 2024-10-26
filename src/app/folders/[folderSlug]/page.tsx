import classNames from "classnames/bind";

import folderApi from "@/api/folder";

import Typography from "@/components/Typography";
import Container from "@/components/Container";
import UpdatedOn from "@/components/UpdatedOn";

import styles from "./page.module.scss";
import Lesson from "@/components/Lesson";

const cx = classNames.bind(styles);

export interface IDetailFolderPage {
  params: {
    folderSlug: string;
  };
}

export default async function DetailFolderPage({ params }: IDetailFolderPage) {
  const folder = await folderApi.getFolderDetail(params.folderSlug);
  return (
    <Container className={cx("wrapper")}>
      <Typography tag="h1" size="medium" className={cx("wrapper__heading")}>
        {folder.name}
      </Typography>

      <UpdatedOn date={folder.latestUpdateDate} />

      <div className={cx("wrapper__lesson-list")}>
        {folder.lessons.map((lesson) => (
          <Lesson key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </Container>
  );
}
