import React from "react";
import QR from "../qr-reader";
import styled from "styled-components";
import { Layout, Button } from "../styles";
import Header from "../components/header";
import BackHelpNext from "../components/back-help-next";
import { Routes } from "../router";

const Section = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #78b6fa;
  border-radius: 8px;
  width: 50%;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

const YukiRecognizes = styled.div`
  background-color: #88cbfa;
  border-radius: 8px;
  height: 50%;
  width: 80%;
  float: left;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  overflow: scroll;
  overflow-x: hidden;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  padding: 10px;
`;

const List = styled.ul`
  padding: 10px;
  font-size: 1.5em;
  margin: 0, 0, 20, 30;
`;

const ListItem = styled.li`
  margin: 2%;
`;

function Webcam1() {
  return (
    <>
      <Layout>
        <Header />
        <Section>
          <QR />
          <InfoDiv>
            <YukiRecognizes>
              <Title> Yuki Recognizes: </Title>
              <List>
                <ListItem>Property 1</ListItem>
                <ListItem>Property 2</ListItem>
                <ListItem>Property 3</ListItem>
                <ListItem>Property 4</ListItem>
                <ListItem>Property 5</ListItem>
              </List>
            </YukiRecognizes>
            <Title> This toy belongs to: </Title>
            <ButtonDiv>
              <Button onClick={() => alert("category 1")}> Category 1 </Button>
              <Button onClick={() => alert("category 2")}> Category 2 </Button>
            </ButtonDiv>
          </InfoDiv>
        </Section>
        <BackHelpNext
          previousRoute={Routes.insertCategories}
          helpRoute={Routes.home}
          nextRoute={Routes.generateModel1}
        />
      </Layout>
    </>
  );
}

export default Webcam1;
