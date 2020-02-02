import React from "react";
import Box from "./box";

const Flex = ({ align, justify, wrap, direction, ...props }) => (
  <Box
    display="flex"
    flexDirection={direction}
    alignItems={align}
    justifyContent={justify}
    flexWrap={wrap}
    {...props}
  />
);

Flex.displayName = "Flex";

export default Flex;
