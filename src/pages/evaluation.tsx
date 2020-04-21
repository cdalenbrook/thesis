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

function Evaluation() {
  return (
    <>
      <Layout>
        <Header />
        <Title>How did Yuki Do?</Title>
        <ExplanationDiv>
          Accuracy, Explanation of accuracy, Possible improvements, Discussion
        </ExplanationDiv>
        <BackNextRow nextRoute="/conclusion" previousRoute="/webcam-2" />
      </Layout>
    </>
  );
}

export default Evaluation;
