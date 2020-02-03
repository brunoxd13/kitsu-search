import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Heading from "./base/heading";
import Flex from "./base/flex";

const AuthorName = styled(Heading.Sub)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProjectName = styled(Heading)`
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 16px;
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

const Title = styled(Flex)`
  justify-content: space-between;
`;

const Separator = styled.div`
  background-color: ${props => props.theme.colors.red};
  margin-bottom: 34px;
  height: 4px;
  width: 58px;

  @media (max-width: 768px) {
    margin-left: 16px;
    margin-bottom: 12px;
  }
`;

const Header = () => {
  const history = useHistory();
  return (
    <>
      <Title>
        <ProjectName onClick={() => history.push("/")}>
          BUSCA KITSU{" "}
          <Heading.Sub d="inline" fontSize="inherit">
            TESTE FRONT-END
          </Heading.Sub>
        </ProjectName>

        <AuthorName>BRUNO RUSSI LAUTENSCHLAGER</AuthorName>
      </Title>
      <Separator />
    </>
  );
};

export default Header;
