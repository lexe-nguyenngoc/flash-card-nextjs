import React from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { CiFolderOn } from "react-icons/ci";

import { IFolder } from "@/types/folder";

import Typography from "@/components/Typography";

import styles from "./Folder.module.scss";

const cx = classNames.bind(styles);

export interface FolderProps {
  folder: IFolder;
}

const Folder = ({ folder }: FolderProps) => {
  return (
    <Link className={cx("folder")} href={`folders/${folder.slug}`}>
      <Typography tag="p" size="small" className={cx("folder__amount")}>
        {folder.amountItems} items
      </Typography>

      <div className={cx("folder__body")}>
        <CiFolderOn />
        <Typography tag="h4" size="regular-bold" className={cx("folder__name")}>
          {folder.name}
        </Typography>
      </div>

      <div className={cx("folder__highlighter")}></div>
    </Link>
  );
};

export default Folder;
