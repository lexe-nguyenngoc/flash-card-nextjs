import { PartsOfSpeech } from "@/constants";

export interface ITerm {
  id: string;
  word: string;
  pronunciation: string;
  partOfSpeech: PartsOfSpeech;
  meaning: string;
  note?: string;
}
