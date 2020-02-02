import styled from "styled-components";

const Label = styled.label`
  display: ${props => (props.display ? props.display : "inline")};
  font-weight: ${props => props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.red};
`;

export default Label;
