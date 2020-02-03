const api = "https://kitsu.io/api/edge";

export const get = async characterId => {
  const res = await fetch(`${api}/characters/${characterId}`);
  return res.json();
};

export const getAll = async characterStart => {
  const res = await fetch(
    `${api}/characters?page%5Blimit%5D=10&page%5Boffset%5D=${characterStart}`
  );
  return res.json();
};
