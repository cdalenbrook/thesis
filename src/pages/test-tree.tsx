import React from "react";
import styled from "styled-components";
import { Layout, Title } from "../styles";
import Header from "../components/header";
import { BackNextRow } from "../components/back-next";

const ExplanationDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  background-color: var(--div1Blue);
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

function TestTree() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Let's Test the Tree!</Title>
        <ExplanationDiv>Info of next page</ExplanationDiv>
        <BackNextRow nextRoute="/webcam-2" previousRoute="/decision-tree" />
      </Layout>
    </>
  );
}

export default TestTree;
