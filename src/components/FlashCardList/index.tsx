"use client";
import classNames from "classnames/bind";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FlashCard } from "@/types";

import Card from "../Card";

import styles from "./FlashCardList.module.scss";

const cx = classNames.bind(styles);

interface IFlashCardList {
  flashCards: FlashCard[];
}

const FlashCardList = ({ flashCards }: IFlashCardList) => {
  const [index, setIndex] = useState(0);

  const router = useRouter();

  const handleAnswerCorrect = () => {
    if (index === flashCards.length - 1) {
      console.log("redirect");
      router.push("/");
    }

    setIndex((prev) => prev + 1);
  };

  return (
    <div className={cx("wrapper")}>
      {flashCards.map((card, i) => {
        console.log({ index, i, card });

        return (
          <Card
            key={card.id}
            className={cx({ inactive: index !== i })}
            data={card}
            onCorrect={handleAnswerCorrect}
          />
        );
      })}
    </div>
  );
};

export default FlashCardList;
