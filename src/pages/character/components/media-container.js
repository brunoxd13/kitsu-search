import React from "react";

import Heading from "../../../components/base/heading";
import Box from "../../../components/base/box";

import Media from "./media";

const MediaContainer = ({ character }) => {
  return (
    <Box data-testid="media-container">
      <Heading color="black" fontSize="md">
        Mídias:
      </Heading>
      {character.medias.map(media => (
        <Media key={media.id} media={media} />
      ))}
    </Box>
  );
};

export default MediaContainer;
