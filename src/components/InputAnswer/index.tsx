"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import classNames from "classnames/bind";
import { IoIosSend } from "react-icons/io";

import { ITerm } from "@/types/term";

import Typography from "../Typography";

import styles from "./InputAnswer.module.scss";

const cx = classNames.bind(styles);

export interface IInputAnswerProps {
  text: string;
  result: string;
  onSubmit: () => void;
}

const InputAnswer = ({ text, result, onSubmit }: IInputAnswerProps) => {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!answer || result !== answer) return;

    onSubmit();
    setAnswer("");
  };

  return (
    <div className={cx("input-answer")}>
      <Typography size="small-bold">Question</Typography>
      <Typography size="regular" className={cx("input-answer__word")}>
        {text}
      </Typography>

      <div>
        <Typography size="small-bold">Answer</Typography>

        <form className={cx("input-answer__form")} onSubmit={handleSubmit}>
          <div className={cx("input-answer__control")}>
            <input
              type="text"
              placeholder="Input your answer..."
              value={answer}
              onChange={handleInputChange}
            />
          </div>

          <button className={cx("input-answer__btn")} type="submit">
            <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputAnswer;
