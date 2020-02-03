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

const MediaContent = styled(Flex)`
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Media = ({ media }) => (
  <Box mb="10px">
    <MediaContent>
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
    </MediaContent>
    <Box as="hr" color="gray" height="0.5px" width="100%" />
  </Box>
);

export default Media;
