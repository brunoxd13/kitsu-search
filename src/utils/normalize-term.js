const normalizeTerm = term => {
  return term
    .split(" ")
    .join("+")
    .toLowerCase();
};

const undoNormalizeTerm = term => {
  return term.split("+").join(" ");
};

export { undoNormalizeTerm };
export default normalizeTerm;
