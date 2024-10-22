import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

const Container = styled(Box)`
  @media (max-width: 768px) {
    margin: 20px 42px 0;
  }
`;

const Character = () => {
  const { id } = useParams();
  const dispatch = useCharacterDispatch();

  useEffect(() => {
    fetchCharacter(dispatch, id);
  }, [dispatch, id]);

  const { character, loading, error } = useCharacterState();

  if (loading) {
    return <h1>Carregando</h1>;
  }

  const { attributes } = character;

  if (error || !character || !attributes) {
    return <h1>Erro</h1>;
  }

  return (
    <Container data-testid="character-details-container">
      <Box>
        <Heading color="black" data-testid="character-name">
          {attributes && attributes.name}
        </Heading>
      </Box>
      <Box overflow="hidden" mb="20px">
        <UserImage
          data-testid="character-image"
          alt={`Image for charcer ${attributes && attributes.name}`}
          src={attributes && attributes.image.original}
        />
        <Text
          as="p"
          textAlign="justify"
          fontSize="sm"
          data-testid="character-description"
          dangerouslySetInnerHTML={{
            __html: attributes && attributes.description
          }}
        />
      </Box>
      <Box>
        <MediaContainer character={character} />
      </Box>
    </Container>
  );
};

export default Character;
