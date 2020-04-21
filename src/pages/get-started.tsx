import React from "react";
import { Layout, Title } from "../styles";
import styled from "styled-components";
import Header from "../components/header";
import { BackNextRow } from "../components/back-next";

const InfoDiv = styled.div`
  background-color: var(--div1Blue);
  width: 80%;
  text-align: left;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
`;

const PickCategories = styled.h1`
  font-size: 1.5em;
  padding-bottom: 10px;
`;

const Info = styled.p`
  font-size: 1em;
`;

function GetStarted() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Let's Get Started!</Title>
        <InfoDiv>
          <PickCategories>Pick 2 Toy Categories</PickCategories>
          <Info>This is how to pick them</Info>
        </InfoDiv>
        <BackNextRow nextRoute="/insert-categories" previousRoute="/quiz" />
      </Layout>
    </>
  );
}

export default GetStarted;
