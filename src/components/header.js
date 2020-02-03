import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Heading from "./base/heading";
import Flex from "./base/flex";

const Title = styled(Flex)`
  justify-content: space-between;
`;

const Separator = styled.div`
  background-color: ${props => props.theme.colors.red};
  margin-bottom: 34px;
  height: 4px;
  width: 58px;
`;

const Header = () => {
  const history = useHistory();
  return (
    <>
      <Title>
        <Heading
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          BUSCA KITSU <Heading.Sub d="inline">TESTE FRONT-END</Heading.Sub>
        </Heading>

        <Heading.Sub>BRUNO RUSSI LAUTENSCHLAGER</Heading.Sub>
      </Title>
      <Separator />
    </>
  );
};

export default Header;
