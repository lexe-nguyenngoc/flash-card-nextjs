import React from "react";
import classNames from "classnames/bind";

import styles from "./Typography.module.scss";

export interface ITypography {
  children: any;
  tag?: "h1" | "h2" | "h3" | "h4" | "p";
  size?: "big" | "medium" | "regular" | "regular-bold" | "small" | "small-bold";
  className?: string;
}

const cx = classNames.bind(styles);

const Typography = ({
  children,
  tag: Tag = "p",
  size = "regular",
  className
}: ITypography) => {
  return <Tag className={cx(className, "typography", size)}>{children}</Tag>;
};

export default Typography;
