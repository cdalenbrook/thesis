import React from "react";
import { Button } from "../styles";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3em;
  padding: 50px;
`;

const Subtitle = styled.p`
  font-size: 1em;
  padding: 50px;
`;

function HomePage() {
  const history = useHistory();
  return (
    <>
      <Header />
      <Layout>
        <Title>Teach Yuki to See</Title>
        <Subtitle>A machine learning lesson for 11-14 year olds</Subtitle>
        <Button onClick={() => history.push("/introduction")}>LET'S GO!</Button>
      </Layout>
    </>
  );
}

export default HomePage;
