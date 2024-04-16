type Type = "N" | "V" | "Adj" | "Adb" | "Prep" | "Det" | "Pron";

export interface FlashCard {
  id: string;
  word: string;
  means: string[];
  pronunciation: string;
  category: string;
  type: Type[];
}

export interface CardGroup {
  id?: string;
  name: string;
  words: FlashCard[];
  slug: string;
}
