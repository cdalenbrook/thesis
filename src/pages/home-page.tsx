import React from "react";
import { Button } from "../styles";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import robot from "../images/robot.png";

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

const Image = styled.img`
  height: 100%;
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

function HomePage() {
  const history = useHistory();
  return (
    <>
      <Header />
      <Layout>
        <Title>Teach Yuki to See</Title>
        <ImageDiv>
          <Image src={robot} alt="robot"></Image>
        </ImageDiv>
        <Subtitle>A machine learning lesson for 11-14 year olds</Subtitle>
        <Button onClick={() => history.push("/introduction")}>LET'S GO!</Button>
      </Layout>
    </>
  );
}

export default HomePage;
