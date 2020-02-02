const api = "https://kitsu.io/api/edge";

export const get = async characterId => {
  const res = await fetch(`${api}/characters/${characterId}`);
  return res.json();
};

export const getAll = async () => {
  const res = await fetch(`${api}/characters`);
  return res.json();
};
