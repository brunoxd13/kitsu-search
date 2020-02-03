import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Heading from "./base/heading";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
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
      <Title onClick={() => history.push("/")}>
        <Heading>
          BUSCA KITSU <Heading.Sub d="inline">TESTE FRONT-END</Heading.Sub>
        </Heading>

        <Heading.Sub>BRUNO RUSSI LAUTENSCHLAGER</Heading.Sub>
      </Title>
      <Separator />
    </>
  );
};

export default Header;
