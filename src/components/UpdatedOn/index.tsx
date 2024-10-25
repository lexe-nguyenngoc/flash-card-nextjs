"use client";

import React from "react";
import classNames from "classnames/bind";

import styles from "./UpdatedOn.module.scss";
import { IoMdTime } from "react-icons/io";
import Typography from "../Typography";
import { TDate } from "@/types";

export interface IUpdatedOn {
  className?: string;
  date: TDate;
}

const cx = classNames.bind(styles);

const formatDate = (value: TDate): string => {
  const date = new Date(value);

  const day = "0" + date.getDate();
  const month = "0" + date.getMonth();
  const year = date.getFullYear();

  return `${day.slice(-2)}-${month.slice(-2)}-${year}`;
};

const UpdatedOn = ({ date, className }: IUpdatedOn) => {
  return (
    <div className={cx(className, "updated-on")}>
      <IoMdTime />
      <Typography>Latest updated on {formatDate(date)}</Typography>
    </div>
  );
};

export default UpdatedOn;
