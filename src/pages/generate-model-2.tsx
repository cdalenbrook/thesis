import React from "react";
import withNavBar from "../components/page-wrappers/withNavBar";
import withBackHelpNext from "../components/page-wrappers/withBackHelpNext";
import styled from "styled-components";
import { Layout, Title } from "../styles";

const HorizontalLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CodeDiv = styled.div`
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
        <Title>Let's Generate the Model!</Title>
        <HorizontalLayout>
          <CodeDiv>Code Div</CodeDiv>
          <ExplanationDiv>Explanation Div</ExplanationDiv>
        </HorizontalLayout>
      </Layout>
    </>
  );
}

export default withNavBar(withBackHelpNext(GenerateModel2));
