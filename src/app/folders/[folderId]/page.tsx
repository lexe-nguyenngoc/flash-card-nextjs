import classNames from "classnames/bind";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export default async function FolderPage() {
  return (
    <main className={cx("wrapper")}>
      <h1>test</h1>
      {/* <Container>
        <Typography tag="h1" size="medium" className={cx("wrapper__heading")}>
          Your library
        </Typography>

        <div></div>

        <div className={cx("wrapper__folder-list")}>
          {folders.map((folder) => (
            <Folder key={folder.id} folder={folder} />
          ))}
        </div>
      </Container> */}
    </main>
  );
}
