import styled from "styled-components";

const Heading = styled.span`
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.red};
`;

const SubHeading = styled(Heading)`
  font-weight: ${props => props.theme.fontWeight.ligth};
`;

export default Heading;
export { SubHeading };
