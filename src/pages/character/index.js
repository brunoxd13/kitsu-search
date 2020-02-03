import React, { useEffect } from "react";
import { useParams } from "react-router";

import Heading from "../../components/base/heading";
import Box from "../../components/base/box";
import Text from "../../components/base/text";

import UserImage from "./components/user-image";
import MediaContainer from "./components/media-container";

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

  const { attributes } = character;

  return (
    <>
      <Box>
        <Heading color="black">{attributes.name}</Heading>
      </Box>
      <Box overflow="hidden" mb="20px">
        <UserImage
          alt={`Image for charcer ${attributes.name}`}
          src={attributes.image.original}
        />
        <Text
          as="p"
          textAlign="justify"
          fontSize="sm"
          dangerouslySetInnerHTML={{
            __html: attributes.description
          }}
        />
      </Box>
      <Box>
        <MediaContainer character={character} />
      </Box>
    </>
  );
};

export default Character;
