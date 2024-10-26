import LearnIcon from "@/assets/icons/learn.svg";
import classNames from "classnames/bind";
import Link from "next/link";

import Typography from "@/components/Typography";

import styles from "./Activities.module.scss";

const cx = classNames.bind(styles);

export interface IActivitiesProps {
  className?: string;
  slug: string;
}

const Activities = ({ className, slug }: IActivitiesProps) => {
  return (
    <div className={cx(className, "activities")}>
      <Typography size="regular-bold" className={cx("activities__heading")}>
        Activities
      </Typography>

      <div className={cx("activities__btn-group")}>
        <Link href={`/learn/${slug}`} className={cx("activities__btn")}>
          <LearnIcon />
          <Typography size="regular-bold">Learn</Typography>
        </Link>

        <Link href={`/learn/${slug}`} className={cx("activities__btn")}>
          <LearnIcon />
          <Typography size="regular-bold">Flash Card</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Activities;
