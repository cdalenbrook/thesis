import React from "react";
import styled from "styled-components";
import { Layout, Title } from "../styles";
import Header from "../components/header";
import { Routes } from "../router";
import BackHelpNext from "../components/back-help-next";

const HorizontalLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CodeDiv = styled.div`
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

const ExplanationDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
  background-color: var(--div1Blue);
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

function GenerateModel2() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Let's Generate the Model!</Title>
        <HorizontalLayout>
          <CodeDiv>Code Div</CodeDiv>
          <ExplanationDiv>Explanation Div</ExplanationDiv>
        </HorizontalLayout>
        <BackHelpNext
          previousRoute={Routes.generateModel1}
          helpRoute={Routes.home}
          nextRoute={Routes.trainModel}
        />
      </Layout>
    </>
  );
}

export default GenerateModel2;
