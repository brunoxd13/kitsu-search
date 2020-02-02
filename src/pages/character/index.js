import React, { useEffect } from "react";
import { useParams } from "react-router";

import {
  useCharacterState,
  useCharacterDispatch,
  fetchCharacter
} from "../../context/character";

const Character = () => {
  const { id } = useParams();
  const dispatch = useCharacterDispatch();

  useEffect(() => {
    fetchCharacter(dispatch, id);
  }, [dispatch, id]);

  const { character, loading } = useCharacterState();

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return <pre>{JSON.stringify(character, null, 2)}</pre>;
};

export default Character;
