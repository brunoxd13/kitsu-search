import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { truncateString } from "../../../utils/truncate-string";

import Text from "../../../components/base/text";
import Flex from "../../../components/base/flex";
import Box from "../../../components/base/box";
import Image from "../../../components/base/image";

const CharacterRowContainer = styled(Flex)`
  width: 100%;
  padding: 20px 25px;
  border-bottom: 2px solid ${props => props.theme.colors.rose};

  &:hover {
    background-color: ${props => props.theme.colors.lightRose};
  }
`;

const NameAndImage = ({ name, image, ...props }) => {
  return (
    <Flex align="center" {...props}>
      <Image
        w="54px"
        h="54px"
        alt={`Imagem do ${name}`}
        src={image && image.original}
        borderRadius="50%"
        mr="25px"
      />
      <Text fontSize="md">{name}</Text>
    </Flex>
  );
};

const CharacterRow = ({ id, name, image, description }) => (
  <div>
    <Link to={`/character/${id}`} style={{ textDecoration: "none" }}>
      <CharacterRowContainer>
        <NameAndImage mr="5px" flexBasis="25%" name={name} image={image} />
        <Box ml="5px" flexBasis="75%">
          <Text
            fontSize="md"
            dangerouslySetInnerHTML={{
              __html: truncateString(description, 200)
            }}
          />
        </Box>
      </CharacterRowContainer>
    </Link>
  </div>
);

export default CharacterRow;
