import React from "react";
import styled from "styled-components";
import withNavBar from "../components/page-wrappers/withNavBar";
import withBackNext from "../components/page-wrappers/withBackNext";
import { Layout, Title } from "../styles";

const Heading = styled.h1`
  font-size: 1.5em;
  margin-left: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--div1Blue);
  height: 80%;
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

const Text = styled.div`
  background-color: white;
  color: black;
  padding: 10px;
  margin: 20px;
`;

function Lesson2() {
  return (
    <>
      <Layout>
        <Title>Lesson 2</Title>
        <Info>
          <Heading>Subtitle</Heading>
          <Text>Info</Text>
        </Info>
      </Layout>
    </>
  );
}

export default withNavBar(withBackNext(Lesson2));
