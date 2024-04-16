import React from "react";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header")}>
      <Link href="/" className={cx("logo")}>
        LearnLet
      </Link>
    </div>
  );
};

export default Header;
