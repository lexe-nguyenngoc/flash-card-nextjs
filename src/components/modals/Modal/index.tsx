import React, { ReactNode, useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

const cx = classNames.bind(styles);

interface IModal {
  children: ReactNode;
  show: boolean;
  backdrop?: boolean;
  placement?: "top" | "center";

  onClose: () => void;
}

const Modal = ({
  children,
  show,
  backdrop,
  placement = "center",
  onClose
}: IModal) => {
  const [currentShow, setCurrentShow] = useState<boolean>(show);

  useEffect(() => {
    if (show) {
      setCurrentShow(show);
    } else {
      setTimeout(() => {
        setCurrentShow(false);
      }, 250);
    }
  }, [show]);

  if (!currentShow) return <></>;

  return createPortal(
    <div>
      <div
        className={cx("wrapper", `placement-${placement}`, {
          show: show
        })}
      >
        <button className={cx("close-btn")} onClick={onClose}>
          <IoCloseSharp />
        </button>

        <div className={cx("content")}>{children}</div>
      </div>

      {backdrop && (
        <div
          className={cx("backdrop", {
            show: show
          })}
        ></div>
      )}
    </div>,
    document.body
  );
};

export default Modal;
