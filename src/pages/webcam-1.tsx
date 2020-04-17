import React from "react";
import QR from "../qr-reader";
import styled from "styled-components";
import withNavBar from "../components/page-wrappers/withNavBar";
import withBackHelpNext from "../components/page-wrappers/withBackHelpNext";
import { Button } from "../styles";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Section = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
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
              <Button onClick={() => alert("hi")}> Category 1 </Button>
              <Button onClick={() => alert("hi2")}> Category 2 </Button>
            </ButtonDiv>
          </InfoDiv>
        </Section>
      </Layout>
    </>
  );
}

export default withNavBar(withBackHelpNext(Webcam1));
