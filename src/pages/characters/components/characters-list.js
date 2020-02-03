import React from "react";
import styled from "styled-components";

import CharacterRow from "./character-row";

import Text from "../../../components/base/text";
import Flex from "../../../components/base/flex";
import Box from "../../../components/base/box";

const CharacterListHeader = styled(Flex)`
  width: 100%;
`;

const CharactersList = ({ characters }) => {
  return (
    <>
      <CharacterListHeader>
        <Text bg="red" p="9px" mr="5px" color="white" flexBasis="25%">
          Personagem
        </Text>
        <Text bg="red" p="9px" ml="5px" color="white" flexBasis="75%">
          Descrição
        </Text>
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
