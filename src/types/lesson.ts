import { ITerm } from "./term";

export interface ILesson {
  id: string;
  name: string;
  slug: string;
  amountTerm: number;
  author: string;
}

export interface ILessonDetail {
  id: string;
  name: string;
  folder: string;
  author: string;
  terms: ITerm[];
}
