import React from "react";
import classNames from "classnames/bind";

import styles from "./Term.module.scss";
import { ITerm } from "@/types/term";
import Typography from "../Typography";

const cx = classNames.bind(styles);

export interface ITermProps {
  className?: string;
  term: ITerm;
}

const Term = ({ className, term }: ITermProps) => {
  return (
    <div className={cx("term", className)}>
      <Typography className={cx("term__word")}>{term.word}</Typography>
      <Typography className={cx("term__pronunciation")}>
        {term.pronunciation}
      </Typography>
      <Typography className={cx("term__partOfSpeech")}>
        {term.partOfSpeech}
      </Typography>
      <Typography className={cx("term__meaning")}>{term.meaning}</Typography>
      <Typography className={cx("term__note")}>{term.note}</Typography>
    </div>
  );
};

export default Term;
