import { IFolder, IFolderDetail } from "@/types/folder";

const getFolders = async (): Promise<IFolder[]> => {
  const folders: IFolder[] = [
    {
      id: "a",
      name: "Folder Name 1",
      amountItems: 0,
      slug: "folder-name-1"
    },
    {
      id: "b",
      name: "Folder Name 2",
      amountItems: 0,
      slug: "folder-name-2"
    },
    {
      id: "c",
      name: "Folder Name 3",
      amountItems: 0,
      slug: "folder-name-3"
    }
  ];

  return folders;
};

const getFolderDetail = async (slug: string): Promise<IFolderDetail> => {
  return {
    id: "a",
    name: "Folder Name 1",
    latestUpdateDate: Date.now(),
    lessons: [
      {
        id: "1",
        name: "lesson 1",
        slug: "lesson-1",
        amountTerm: 30,
        author: "Lexe"
      },
      {
        id: "2",
        name: "lesson 1",
        slug: "lesson-1",
        amountTerm: 1,
        author: "Lexe"
      },
      {
        id: "3",
        name: "lesson 1",
        slug: "lesson-1",
        amountTerm: 30,
        author: "Lexe"
      }
    ]
  };
};

const folderApi = {
  getFolders,
  getFolderDetail
};

export default folderApi;
