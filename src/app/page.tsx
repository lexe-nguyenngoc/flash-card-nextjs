import CardGroup from "@/components/CardGroup";
import styles from "./page.module.css";

type Type = "N" | "V" | "Adj" | "Adb" | "Prep" | "Det" | "Pron";

interface IFlashCard {
  id: string;
  word: string;
  mean: string;
  pronunciation: string;
  category: string;
  type: Type[];
}

export interface ICardGroup {
  id?: string;
  name: string;
  words: IFlashCard[];
}

export default function Home() {
  const cardGroups: ICardGroup[] = [
    {
      id: "1",
      name: "A",
      words: [
        {
          id: "1",
          word: "a",
          mean: "Nhỏ, một ít",
          pronunciation: "",
          category: "",
          type: ["Det", "Pron"]
        },
        {
          id: "2",
          word: "abandon",
          mean: "Bỏ, từ bỏ",
          pronunciation: "ə'bæn.dən",
          category: "",
          type: ["V"]
        },
        {
          id: "3",
          word: "abandoned",
          mean: "Bị bỏ rời, bị ruồng bỏ",
          pronunciation: "ə'bæn.dənd",
          category: "",
          type: ["V"]
        }
      ]
    }
  ];

  return (
    <main className={styles.wrapper}>
      {cardGroups.map((cardGroup) => (
        <CardGroup
          key={cardGroup.id}
          name={cardGroup.name}
          wordsCount={cardGroup.words.length}
        />
      ))}
    </main>
  );
}
