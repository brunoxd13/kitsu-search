import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Input from "../../../components/base/input";
import Text from "../../../components/base/text";

import normalizeTerm, {
  undoNormalizeTerm
} from "../../../utils/normalize-term";

const Container = styled.div`
  margin-bottom: 34px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const CharacterSearch = ({ searchName = "" }) => {
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState(undoNormalizeTerm(searchName));

  const onHandleKeyPress = e => {
    if (e.key === "Enter") {
      history.push(`/search/${normalizeTerm(searchTerm)}`);
    }
  };

  return (
    <Container>
      <Text as="label" htmlFor="search-input" d="block" color="red">
        Nome do personagem
      </Text>
      <Input
        id="search-input"
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={onHandleKeyPress}
        width="100%"
        maxWidth="400px"
        value={searchTerm}
      />
    </Container>
  );
};

export default CharacterSearch;
