export const sortByEngName = (rowA, rowB) => {
  const a = rowA.englishName.toUpperCase();
  const b = rowB.englishName.toUpperCase();
  if (a < b) {
    return -1
  } else if (a > b) {
    return 1
  } else {
    return 0
  }
};
