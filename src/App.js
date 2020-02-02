import React from "react";
import styled from "styled-components";

import Routes from "./routes";
import Header from "./components/header";

const Container = styled.div`
  margin: 20px 42px 0;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  );
};

export default App;
