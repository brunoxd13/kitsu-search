import React from "react";
import styled from "styled-components";

import Heading from "../../../components/base/heading";
import Box from "../../../components/base/box";
import Text from "../../../components/base/text";
import Flex from "../../../components/base/flex";
import Image from "../../../components/base/image";

const MediaImage = styled(Image)`
  margin: 0 7px 7px 0;
  min-width: 200px;
  min-height: 200px;
  width: 200px;
  height: 200px;
`;

const Media = ({ media }) => (
  <Box mb="10px">
    <Flex directrion="row">
      <MediaImage
        alt={`Image for media ${media.attributes.canonicalTitle}`}
        src={media.attributes.posterImage.original}
      />

      <Box>
        <Heading.Sub fontSize="md" color="black">
          {media.attributes.canonicalTitle}
        </Heading.Sub>
        <Text
          as="p"
          textAlign="justify"
          fontSize="sm"
          dangerouslySetInnerHTML={{
            __html: media.attributes.synopsis
          }}
        />
      </Box>
    </Flex>
  </Box>
);

export default Media;
