import Lesson from "@/components/Lesson";
import styles from "./page.module.css";

export default function Home() {
  const cardGroups = [
    {
      id: "1",
      name: "A",
      slug: "a",
      wordsCount: 3
    }
  ];

  return (
    <main className={styles.wrapper}>
      {cardGroups.map((cardGroup) => (
        <Lesson
          key={cardGroup.id}
          name={cardGroup.name}
          slug={cardGroup.slug}
          wordsCount={cardGroup.wordsCount}
        />
      ))}
    </main>
  );
}
