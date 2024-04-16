"use client";
import classNames from "classnames/bind";
import {
  ChangeEvent,
  FC,
  FormEvent,
  ForwardRefRenderFunction,
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { IoIosSend } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { FlashCard } from "@/types";

import styles from "./Card.module.scss";
import Box from "../Box";

const cx = classNames.bind(styles);
enum TypeStatus {
  CORRECT = "correct",
  INCORRECT = "incorrect",
  DEFAULT = "default"
}

interface ICard {
  className?: string;
  data: FlashCard;
  onCorrect(): void;
}

export interface ICardRef {
  onFocus: () => void;
}

const Card = forwardRef<ICardRef, ICard>(
  ({ className, data, onCorrect }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [status, setStatus] = useState<TypeStatus>(TypeStatus.DEFAULT);
    const inputRef = useRef<HTMLInputElement>(null);

    const disabled = status === TypeStatus.CORRECT;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(TypeStatus.DEFAULT);
      setInputValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const match = data.means.some(
        (mean) => inputValue.toLowerCase().trim() === mean.toLowerCase().trim()
      );

      if (match) {
        setStatus(TypeStatus.CORRECT);
        setTimeout(onCorrect, 1000);
        return;
      }

      setStatus(TypeStatus.INCORRECT);
    };

    useImperativeHandle(ref, () => ({
      onFocus() {
        inputRef.current?.focus();
      }
    }));

    return (
      <Box className={cx("wrapper", className)}>
        <>
          <p className={cx("word-caption")}>Word</p>
          <h3 className={cx("word")}>{data.word}</h3>

          <form onSubmit={handleSubmit} className={cx("form")}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type here"
              value={inputValue}
              onChange={handleInputChange}
              className={cx("form-control", status)}
              disabled={disabled}
            />
            <button
              type="submit"
              className={cx("form-btn")}
              disabled={disabled}
            >
              {status === TypeStatus.CORRECT ? (
                <AiOutlineLoading3Quarters className={cx("animate")} />
              ) : (
                <IoIosSend />
              )}
            </button>
          </form>
        </>
      </Box>
    );
  }
);

Card.displayName = "Card";
export default Card;
