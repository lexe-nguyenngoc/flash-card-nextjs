"use client";

import classNames from "classnames/bind";

import { ITerm } from "@/types/term";
import InputAnswer from "../InputAnswer";
import styles from "./LearnBody.module.scss";
import { useEffect, useReducer, useState } from "react";

const cx = classNames.bind(styles);

export interface ILearnBodyProps {
  terms: ITerm[];
}

export interface IState {
  terms: ITerm[];
}

type TAction =
  | { type: "update_remain_terms"; payload: ITerm[] }
  | { type: "success"; id: string };

const initialState: IState = {
  terms: []
};

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "update_remain_terms":
      return {
        ...state,
        terms: action.payload
      };

    case "success": {
      return {
        terms: state.terms.filter((term) => term.id !== action.id)
      };
    }

    default: {
      return state;
    }
  }
};

const LearnBody = ({ terms }: ILearnBodyProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentTerm = state.terms.length > 0 ? state.terms[0] : null;

  const handleSubmit = () => {
    if (!currentTerm) return;
    dispatch({ type: "success", id: currentTerm.id });
  };

  useEffect(() => {
    console.log(terms);

    dispatch({ type: "update_remain_terms", payload: terms });
  }, [terms]);

  return (
    <div className={cx("learn-body")}>
      <InputAnswer
        text={currentTerm?.word || ""}
        result={currentTerm?.meaning || ""}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LearnBody;
