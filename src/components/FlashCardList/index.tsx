"use client";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { FlashCard } from "@/types";

import Card, { ICardRef } from "../Card";

import styles from "./FlashCardList.module.scss";

const cx = classNames.bind(styles);

interface IFlashCardList {
  flashCards: FlashCard[];
}

const FlashCardList = ({ flashCards }: IFlashCardList) => {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<(ICardRef | null)[]>([]);

  const handleAnswerCorrect = () => {
    if (index === flashCards.length - 1) {
      console.log("redirect");
      router.push("/");
    }

    setIndex((prev) => prev + 1);
  };

  useEffect(() => {
    inputRef.current[index]?.onFocus();
  }, [index]);

  return (
    <div className={cx("wrapper")}>
      {flashCards.map((card, i) => (
        <Card
          key={card.id}
          ref={(ref) => {
            inputRef.current[i] = ref;
          }}
          className={cx("card", { active: index === i })}
          data={card}
          onCorrect={handleAnswerCorrect}
        />
      ))}
    </div>
  );
};

export default FlashCardList;
