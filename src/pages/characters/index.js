import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Flex from "../../components/base/flex";
import Pagination from "../../components/pagination";

import CharactersList from "./components/characters-list";
import CharacterSearch from "./components/character-search";

import {
  useCharacterState,
  useCharacterDispatch,
  fetchAllCharacters
} from "../../context/character";

const Characters = () => {
  const { id, searchName } = useParams();
  const dispatch = useCharacterDispatch();

  useEffect(() => {
    fetchAllCharacters(dispatch, id, searchName);
  }, [dispatch, id, searchName]);

  const { characters, loading, info, error } = useCharacterState();

  if (loading) {
    return <h1>Carregando</h1>;
  }

  if (error || !characters) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <CharacterSearch searchName={searchName} />
      <CharactersList characters={characters} />
      <Flex
        direction="row"
        justify="center"
        align="center"
        mt="18px"
        data-testid="pagination-container"
      >
        <Pagination totalPerPage={10} total={info.count} />
      </Flex>
    </>
  );
};

export default Characters;
