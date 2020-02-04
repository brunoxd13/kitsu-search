import React from "react";
import styled from "styled-components";

import Routes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

const Container = styled.div`
  margin: 20px 42px 0;

  @media (max-width: 768px) {
    margin: 12px 0 12px;
  }
`;

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Routes />
      </Container>
      <Footer />
    </>
  );
};

export default App;
