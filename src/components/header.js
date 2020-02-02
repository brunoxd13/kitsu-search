import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.span`
  font-weight: ${props => props.theme.fontWeight.black};
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.red};
`;

const SubHeading = styled(Heading)`
  font-weight: ${props => props.theme.fontWeight.ligth};
`;

const Separator = styled.div`
  background-color: ${props => props.theme.colors.red};
  margin-bottom: ${props => props.theme.spaces[5]};
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
