import React from "react";

import Heading from "../../../components/base/heading";

import Media from "./media";

const MediaContainer = ({ character }) => {
  return (
    <>
      <Heading color="black" fontSize="md">
        Mídias:
      </Heading>
      {character.medias.map(media => (
        <Media key={media.id} media={media} />
      ))}
    </>
  );
};

export default MediaContainer;
