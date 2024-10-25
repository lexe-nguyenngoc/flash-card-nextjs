import { IFolder } from "@/types/folder";

const getFolder = async (): Promise<IFolder[]> => {
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

const folderApi = {
  getFolder
};

export default folderApi;
