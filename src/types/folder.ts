import { ILesson } from "./lesson";

export interface IFolder {
  id: string;
  name: string;
  amountItems: number;
  slug: string;
}

export interface IFolderDetail {
  id: string;
  name: string;
  latestUpdateDate: string | number;
  lessons: ILesson[];
}
