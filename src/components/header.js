import React from "react";
import styled from "styled-components";

import Heading, { SubHeading } from "./base/heading";

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
        BUSCA KITSU <SubHeading>TESTE FRONT-END</SubHeading>
      </Heading>

      <SubHeading>BRUNO RUSSI LAUTENSCHLAGER</SubHeading>
    </Title>
    <Separator />
  </>
);

export default Header;
