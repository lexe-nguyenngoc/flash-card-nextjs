import { PartsOfSpeech } from "@/constants";
import { ILessonDetail } from "@/types/lesson";

const getLesson = async (lessonSlug: string): Promise<ILessonDetail> => {
  return {
    id: "1",
    author: "Lexe",
    name: "Lesson 1",
    folder: "Folder Name",
    terms: [
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
    ]
  };
};

const lessonApi = { getLesson };

export default lessonApi;
