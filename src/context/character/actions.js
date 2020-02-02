import * as characterAPI from "../../service/character-api";

async function fetchAllCharacters(dispatch) {
  const charactersResponse = await characterAPI.getAll();

  dispatch({ type: "fetchAllCharacters", data: charactersResponse.data });

  dispatch({
    type: "fetchInfo",
    data: { ...charactersResponse.links, ...charactersResponse.meta }
  });
}

export { fetchAllCharacters };
