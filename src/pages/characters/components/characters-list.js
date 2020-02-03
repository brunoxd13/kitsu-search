import React from "react";
import styled from "styled-components";

import CharacterRow from "./character-row";

import Text from "../../../components/base/text";
import Flex from "../../../components/base/flex";
import Box from "../../../components/base/box";

const CharacterListHeader = styled(Flex)`
  width: 100%;
`;

const CharacterContainer = styled(Box)`
  background-color: ${props => props.theme.colors.red};
  margin-right: 5px;
  flex-basis: 25%;
  padding: 9px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const DescriptionContainer = styled(Box)`
  background-color: ${props => props.theme.colors.red};
  margin-left: 5px;
  flex-basis: 75%;
  padding: 9px;

  @media (max-width: 768px) {
    display: none;
    flex-basis: 0%;
  }
`;

const CharactersList = ({ characters }) => {
  return (
    <>
      <CharacterListHeader>
        <CharacterContainer>
          <Text color="white">Personagem</Text>
        </CharacterContainer>
        <DescriptionContainer>
          <Text color="white">Descrição</Text>
        </DescriptionContainer>
      </CharacterListHeader>

      <Box>
        {characters.map(({ attributes, id }) => (
          <CharacterRow
            key={`character-${attributes.name}`}
            id={id}
            {...attributes}
          />
        ))}
      </Box>
    </>
  );
};

export default CharactersList;
