import React from "react";
import classNames from "classnames/bind";

import styles from "./Box.module.scss";

const cx = classNames.bind(styles);

const Box = ({
  children,
  className
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return <div className={cx("wrapper", className)}>{children}</div>;
};

export default Box;
