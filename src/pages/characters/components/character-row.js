import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { truncateString } from "../../../utils/truncate-string";

import Text from "../../../components/base/text";
import Flex from "../../../components/base/flex";
import Box from "../../../components/base/box";
import Image from "../../../components/base/image";

const CharacterRowContainer = styled(Flex)`
  width: 100%;
  cursor: pointer;
  padding: 20px 25px;
  border-bottom: 2px solid ${props => props.theme.colors.rose};

  &:hover {
    background-color: ${props => props.theme.colors.lightRose};
  }

  @media (max-width: 768px) {
    padding: 18px 25px;
  }
`;

const CharacterDescriptionContainer = styled(Box)`
  margin-left: 5px;
  flex-basis: 75%;

  @media (max-width: 768px) {
    display: none;
    flex-basis: 0%;
  }
`;

const NameAndImageContainer = styled(Box)`
  margin-right: 5px;
  flex-basis: 25%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const NameAndImage = ({ name, image, ...props }) => {
  return (
    <Flex align="center" {...props}>
      <Image
        w="58px"
        h="58px"
        alt={`Imagem do ${name}`}
        src={image && image.original}
        borderRadius="50%"
        mr="25px"
        data-testid="character-image"
      />
      <Text fontSize="md" data-testid="character-name">
        {name}
      </Text>
    </Flex>
  );
};

const CharacterRow = ({ id, name, image, description }) => {
  const history = useHistory();

  return (
    <CharacterRowContainer
      onClick={() => history.push(`/character/${id}`)}
      data-testid="character-row"
    >
      <NameAndImageContainer>
        <NameAndImage name={name} image={image} />
      </NameAndImageContainer>
      <CharacterDescriptionContainer data-testid="character-description">
        <Text
          fontSize="md"
          dangerouslySetInnerHTML={{
            __html: truncateString(description.split("<br>").join(" "), 200)
          }}
        />
      </CharacterDescriptionContainer>
    </CharacterRowContainer>
  );
};

export default CharacterRow;
