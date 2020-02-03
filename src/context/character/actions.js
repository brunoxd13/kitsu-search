import * as characterAPI from "../../service/character-api";

const TOGGLE_LOADING = "toggleLoading";
const FETCH_ALL_CHARACTERS = "fetchAllCharacters";
const FETCH_CHARACTER = "fetchCharacter";
const FETCH_INFO = "fetchInfo";
const FETCH_CHARACTER_MEDIA = "fetchCharacterMedia";

async function fetchAllCharacters(dispatch, pageNumber = 1, searchName) {
  dispatch({ type: TOGGLE_LOADING, loading: true });

  const characterStart = pageNumber * 10 - 10;

  const charactersResponse = await characterAPI.getAll(
    characterStart,
    searchName
  );

  dispatch({ type: FETCH_ALL_CHARACTERS, data: charactersResponse.data });

  dispatch({
    type: FETCH_INFO,
    data: { ...charactersResponse.links, ...charactersResponse.meta }
  });

  dispatch({ type: TOGGLE_LOADING, loading: false });
}

async function fetchCharacter(dispatch, characterId) {
  dispatch({ type: TOGGLE_LOADING, loading: true });

  const characterResponse = await characterAPI.get(characterId);
  dispatch({ type: FETCH_CHARACTER, data: characterResponse.data });

  const characterMediaResponse = await characterAPI.getCharacterMediaIds(
    characterId
  );

  const mediaIds = characterMediaResponse.data.map(media => media.id);

  const characterMedias = await Promise.all(
    mediaIds.map(async id => {
      const response = await characterAPI.getCharacterMedia(id);
      return response.data;
    })
  );

  dispatch({ type: FETCH_CHARACTER_MEDIA, data: characterMedias });

  dispatch({ type: TOGGLE_LOADING, loading: false });
}

export {
  TOGGLE_LOADING,
  FETCH_ALL_CHARACTERS,
  FETCH_CHARACTER,
  FETCH_INFO,
  FETCH_CHARACTER_MEDIA
};
export { fetchAllCharacters, fetchCharacter };
