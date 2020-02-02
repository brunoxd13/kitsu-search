export const truncateString = (string, length) => {
  if (length > string.length) {
    return string;
  }

  return string
    .substring(0, length)
    .trim()
    .concat("...");
};
