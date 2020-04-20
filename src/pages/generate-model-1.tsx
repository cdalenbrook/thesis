import React from "react";
import withNavBar from "../components/page-wrappers/withNavBar";
import withBackNext from "../components/page-wrappers/withBackNext";
import styled from "styled-components";
import { Layout, Title } from "../styles";

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

function GenerateModel1() {
  return (
    <>
      <Layout>
        <Title>Let's Generate the Model!</Title>
        <ExplanationDiv>
          Explanation on how the next page will work
        </ExplanationDiv>
      </Layout>
    </>
  );
}

export default withNavBar(withBackNext(GenerateModel1));
