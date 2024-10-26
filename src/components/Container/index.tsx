import React from "react";
import classNames from "classnames/bind";

import styles from "./Container.module.scss";

const cx = classNames.bind(styles);

export interface IContainerProps {
  children: any;
  sm?: boolean;
  className?: string;
}

const Container = ({ children, sm, className }: IContainerProps) => {
  return <div className={cx(className, "container", { sm })}>{children}</div>;
};

export default Container;
