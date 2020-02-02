import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  width: ${props => (props.width ? props.width : "auto")};
  border: 1px solid ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.small};
  border-radius: 3px;
  height: 31px;
`;

const Input = ({ ...props }) => {
  return <InputStyled {...props} />;
};

export default Input;
