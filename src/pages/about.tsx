import React from "react";
import styled from "styled-components";
import Header from "../components/header";

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 10px;
`;

const InfoDiv = styled.div`
  padding: 50px;
  background-color: white;
  margin: 10px;
  border-radius: 8px;
  width: 100%;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  color: black;
`;

function About() {
  return (
    <>
      <Layout>
        <Header />
        <Title> About the Lesson </Title>
        <InfoDiv> test </InfoDiv>
        <InfoDiv> </InfoDiv>
        <InfoDiv> </InfoDiv>
        <InfoDiv> </InfoDiv>
      </Layout>
    </>
  );
}

export default About;
