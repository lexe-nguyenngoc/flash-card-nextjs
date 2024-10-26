"use client";

import React from "react";
import classNames from "classnames/bind";

import { ITerm } from "@/types/term";

import Term from "@/components/Term";

import styles from "./TermsList.module.scss";
import Typography from "@/components/Typography";

const cx = classNames.bind(styles);

export interface ITermsListProps {
  className?: string;
  terms: ITerm[];
}

const TermsList = ({ className, terms }: ITermsListProps) => {
  return (
    <div className={cx(className, "terms-list")}>
      <Typography
        tag="h3"
        size="regular-bold"
        className={cx("terms-list__title")}
      >
        Terms
      </Typography>

      <div>
        {terms.map((term) => (
          <Term key={term.id} term={term} className={cx("terms-list__item")} />
        ))}
      </div>
    </div>
  );
};

export default TermsList;
