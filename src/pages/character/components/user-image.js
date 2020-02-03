import styled from "styled-components";
import Image from "../../../components/base/image";

const UserImage = styled(Image)`
  margin: 0 7px 7px 0;
  float: left;
  shape-outside: circle();
  border-radius: 50%;
  width: 230px;
  height: 230px;
  border: 5px solid ${props => props.theme.colors.rose};
`;

export default UserImage;
