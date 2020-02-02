import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Box from "./box";

const InputStyled = styled(Box)`
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 3px;
  height: 31px;
`;

const Input = ({ ...props }) => {
  return <InputStyled {...props} />;
};

Input.displayName = "Input";

Input.defaultProps = {
  as: "input",
  fontSize: "sm"
};

Input.propTypes = {
  as: propTypes.string,
  fontSize: propTypes.oneOf(["sm", "md", "lg"])
};

export default Input;
