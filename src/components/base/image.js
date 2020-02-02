import React from "react";

import Box from "./box";

const Image = ({ ...props }) => {
  return <Box as="img" {...props} />;
};

export default Image;
