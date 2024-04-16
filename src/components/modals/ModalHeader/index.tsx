import classNames from "classnames/bind";

import styles from "./ModalHeader.module.scss";

const cx = classNames.bind(styles);

interface IModalHeader {}

const ModalHeader = ({}: IModalHeader) => {
  return <div className={cx("wrapper")}></div>;
};

export default ModalHeader;
