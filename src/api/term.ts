import { PartsOfSpeech } from "@/constants";
import { ITerm } from "@/types/term";

const getTermsByLessonSlug = async (lessonSlug: string): Promise<ITerm[]> => {
  const data: ITerm[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          word: "run",
          pronunciation: "/rʌn/",
          partOfSpeech: PartsOfSpeech.Verb,
          meaning: "chạy"
        },
        {
          id: "2",
          word: "beautiful",
          pronunciation: "/ˈbjuːtɪfəl/",
          partOfSpeech: PartsOfSpeech.Adjective,
          meaning: "đẹp"
        },
        {
          id: "3",
          word: "quickly",
          pronunciation: "/ˈkwɪkli/",
          partOfSpeech: PartsOfSpeech.Adjective,
          meaning: "một cách nhanh chóng"
        },
        {
          id: "4",
          word: "cat",
          pronunciation: "/kæt/",
          partOfSpeech: PartsOfSpeech.Noun,
          meaning: "mèo"
        },
        {
          id: "5",
          word: "and",
          pronunciation: "/ænd/",
          partOfSpeech: PartsOfSpeech.Conjunction,
          meaning: "và"
        }
      ]);
    }, 3000);
  });

  return data;
};

const termApi = { getTermsByLessonSlug };

export default termApi;
