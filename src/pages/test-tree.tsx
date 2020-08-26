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
  font-size: 1.2em;
  line-height: 25px;
`;

function TestTree() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Let's Test the Tree!</Title>
        <ExplanationDiv>
          Now that you have created the decision tree algorithm let’s see how
          good it is at predicting the category of new, unseen toys.
          <br></br>
          <br></br>
          The next page will be similar to the page where you showed the camera
          examples of 12 toys and told the computer which category the toys
          belonged into. This time, show the camera a new toy and Yuki will,
          using the decision tree algorithm, predict which category he thinks
          the toy belongs into.
          <br></br>
          <br></br>
          Can Yuki make the right prediction? Let’s see!
        </ExplanationDiv>
        <BackNextRow nextRoute="/webcam-2" previousRoute="/decision-tree" />
      </Layout>
    </>
  );
}

export default TestTree;
