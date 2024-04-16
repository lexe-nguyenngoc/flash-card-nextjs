import { FlashCard } from "@/types";
import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ICard {
  data: FlashCard;
}
const Card = ({ data }: ICard) => {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("word-caption")}>Word</p>
      <h3 className={cx("word")}>{data.word}</h3>
    </div>
  );
};

export default Card;
