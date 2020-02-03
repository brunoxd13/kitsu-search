const api = "https://kitsu.io/api/edge";

export const get = async characterId => {
  const res = await fetch(`${api}/characters/${characterId}`);
  return res.json();
};

export const getAll = async (characterStart, searchName) => {
  if (searchName) {
    return await getAllByName(characterStart, searchName);
  }

  const res = await fetch(
    `${api}/characters?characters?page[limit]=10&page[offset]=${characterStart}`
  );

  return res.json();
};

export const getAllByName = async (characterStart, name) => {
  const res = await fetch(
    `${api}/characters?characters?page[limit]=10&page[offset]=${characterStart}&filter[name]=${name}`
  );
  return res.json();
};
