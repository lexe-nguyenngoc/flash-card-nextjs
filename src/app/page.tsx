import classNames from "classnames/bind";

import folderApi from "@/api/folder";

import Typography from "@/components/Typography";
import Folder from "@/components/Folder";
import Container from "@/components/Container";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export default async function Home() {
  const folders = await folderApi.getFolders();

  return (
    <main className={cx("wrapper")}>
      <Container>
        <Typography tag="h1" size="medium" className={cx("wrapper__heading")}>
          Your library
        </Typography>

        <div></div>

        <div className={cx("wrapper__folder-list")}>
          {folders.map((folder) => (
            <Folder key={folder.id} folder={folder} />
          ))}
        </div>
      </Container>
    </main>
  );
}
