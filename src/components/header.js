import React from "react";
import styled from "styled-components";

import Heading from "./base/heading";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Separator = styled.div`
  background-color: ${props => props.theme.colors.red};
  margin-bottom: 34px;
  height: 4px;
  width: 58px;
`;

const Header = () => (
  <>
    <Title>
      <Heading>
        BUSCA KITSU <Heading.Sub d="inline">TESTE FRONT-END</Heading.Sub>
      </Heading>

      <Heading.Sub>BRUNO RUSSI LAUTENSCHLAGER</Heading.Sub>
    </Title>
    <Separator />
  </>
);

export default Header;
