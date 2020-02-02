import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Box from "./box";

const TextStyled = styled(Box)`
  font-weight: ${props => props.theme.fontWeight.regular};
  line-height: 1.2;
`;

const Text = ({ ...props }) => {
  return <TextStyled {...props} />;
};

Text.displayName = "Text";

Text.defaultProps = {
  as: "span",
  size: "sm",
  color: "text"
};

Text.propTypes = {
  as: propTypes.string,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  color: propTypes.string
};

export default Text;
