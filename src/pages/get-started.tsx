import React from "react";
import { Layout, Title } from "../styles";
import withNavBar from "../components/page-wrappers/withNavBar";
import withBackNext from "../components/page-wrappers/withBackNext";
import styled from "styled-components";

const InfoDiv = styled.div`
  background-color: var(--div1Blue);
  width: 100%;
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
        <Title>Let's Get Started!</Title>
        <InfoDiv>
          <PickCategories>Pick 2 Toy Categories</PickCategories>
          <Info>This is how to pick them</Info>
        </InfoDiv>
      </Layout>
    </>
  );
}

export default withNavBar(withBackNext(GetStarted));
