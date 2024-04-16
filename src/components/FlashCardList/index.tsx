"use client";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { FlashCard } from "@/types";

import CompleteLesson from "@/components/alert/CompleteLesson";

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
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleContinueModal = () => {
    setIsComplete(false);

    setTimeout(() => {
      router.push("/");
    }, 250);
  };

  const handleAnswerCorrect = () => {
    if (index === flashCards.length - 1) {
      setIsComplete(true);
      return;
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

      <CompleteLesson
        show={isComplete}
        message="Great! You have completed this lesson!"
        onClose={handleContinueModal}
        onContinue={handleContinueModal}
      />
    </div>
  );
};

export default FlashCardList;
