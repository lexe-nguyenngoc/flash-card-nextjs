import classNames from "classnames/bind";

import Modal from "@/components/modals";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./CompleteLesson.module.scss";

const cx = classNames.bind(styles);

export interface ICompleteLesson {
  show: boolean;
  type?: "success" | "failed";
  message: string;

  onClose: () => void;
  onContinue: () => void;
}

const CompleteLesson = ({
  show,
  type = "success",
  message,
  onClose,
  onContinue
}: ICompleteLesson) => {
  return (
    <Modal
      show={show}
      backdrop
      className={cx("modal")}
      placement="top"
      onClose={onClose}
    >
      <div className={cx("wrapper", type)}>
        <div className={cx("icon")}>
          <AiFillCheckCircle />
        </div>
        <h3 className={cx("heading")}>success</h3>
        <p className={cx("message")}>{message}</p>

        <button type="button" className={cx("btn")} onClick={onContinue}>
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default CompleteLesson;
