"use client";
import React, { useState } from "react";
import classNames from "classnames/bind";

import { FlashCard } from "@/types";

import Card from "../Card";
import Box from "../Box";

import styles from "./FlashCardList.module.scss";

const cx = classNames.bind(styles);

interface IFlashCardList {
  flashCards: FlashCard[];
}

const FlashCardList = ({ flashCards }: IFlashCardList) => {
  const [word, setWord] = useState(flashCards[0]);
  return (
    <div className={cx("wrapper")}>
      <Box>
        <Card data={word} />
      </Box>
    </div>
  );
};

export default FlashCardList;
