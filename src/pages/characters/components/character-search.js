import React from "react";
import styled from "styled-components";

import Input from "../../../components/base/input";
import Text from "../../../components/base/text";

const Container = styled.div`
  margin-bottom: 34px;
`;

const CharacterSearch = () => {
  return (
    <Container>
      <Text as="label" htmlFor="search-input" d="block" color="red">
        Nome do personagem
      </Text>
      <Input
        id="search-input"
        onChange={e => console.log(e.target.value)}
        width="400px"
      />
    </Container>
  );
};

export default CharacterSearch;
