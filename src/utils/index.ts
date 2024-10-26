const pluralize = (word: string, count: number) => {
  return `${count} ${word}${count > 1 ? "s" : ""}`;
};

const utils = { pluralize };

export default utils;
