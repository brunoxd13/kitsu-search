import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Box from "./box";

const HeadingStyled = styled(Box)`
  font-weight: ${props => props.theme.fontWeight.black};
`;

const Heading = ({ ...props }) => {
  return <HeadingStyled {...props} />;
};

Heading.displayName = "Heading";

Heading.defaultProps = {
  m: 0,
  as: "h1",
  fontSize: "lg",
  color: "red"
};

Heading.propTypes = {
  as: propTypes.string,
  fontSize: propTypes.oneOf(["inherit", "sm", "md", "lg"]),
  color: propTypes.string
};

const SubHeadingStyled = styled(HeadingStyled)`
  font-weight: ${props => props.theme.fontWeight.ligth};
`;

const SubHeading = ({ ...props }) => {
  return <SubHeadingStyled {...props} />;
};

SubHeading.displayName = "SubHeading";

SubHeading.defaultProps = {
  m: 0,
  as: "h2",
  fontSize: "lg",
  color: "red"
};

SubHeading.propTypes = {
  as: propTypes.string,
  fontSize: propTypes.oneOf(["inherit", "sm", "md", "lg"]),
  color: propTypes.string
};

Heading.Sub = SubHeading;

export default Heading;
