import React, { useEffect } from "react";

import CharactersList from "./components/characters-list";
import CharacterSearch from "./components/character-search";

import {
  useCharacterState,
  useCharacterDispatch,
  fetchAllCharacters
} from "../../context/character";

const Characters = () => {
  const dispatch = useCharacterDispatch();

  useEffect(() => {
    fetchAllCharacters(dispatch);
  }, [dispatch]);

  const { characters, loading } = useCharacterState();

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <>
      <CharacterSearch />
      <CharactersList characters={characters} />
    </>
  );
};

export default Characters;
