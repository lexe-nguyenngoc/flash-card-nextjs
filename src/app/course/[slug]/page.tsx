import { redirect } from "next/navigation";
import classNames from "classnames/bind";

import { CardGroup } from "@/types";

import FlashCardList from "@/components/FlashCardList";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

interface ICourseDetail {
  readonly params: { slug: string };
}

const cardGroups: CardGroup[] = [
  {
    id: "1",
    name: "A",
    slug: "a",
    words: [
      {
        id: "1",
        word: "a",
        means: ["Một", "một ít"],
        pronunciation: "",
        category: "",
        type: ["Det", "Pron"]
      },
      {
        id: "2",
        word: "abandon",
        means: ["bỏ", "từ bỏ"],
        pronunciation: "ə'bæn.dən",
        category: "",
        type: ["V"]
      },
      {
        id: "3",
        word: "abandoned",
        means: ["bị bỏ rơi", "bị ruồng bỏ"],
        pronunciation: "ə'bæn.dənd",
        category: "",
        type: ["V"]
      }
    ]
  }
];

export default function CourseDetail({ params }: ICourseDetail) {
  const questions = cardGroups.find((x) => x.slug === params.slug);

  if (!questions) return redirect("/404");

  return (
    <div>
      <FlashCardList flashCards={questions.words} />
    </div>
  );
}
