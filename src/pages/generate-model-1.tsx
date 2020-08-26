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
  line-height: 25px;
  font-size: 1.2em;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
`;

function GenerateModel1() {
  return (
    <>
      <Layout>
        <Header />
        <Title>Let's Generate the Model!</Title>
        <ExplanationDiv>
          Now that you have separated all the toys into the two categories, you
          need to program the decision tree that will help Yuki classify new
          toys in the future.
          <br></br>
          <br></br>
          On the next page you will be able to program the algorithm by dragging
          and dropping different blocks into the correct order. Each block is
          responsible for a different part of the algorithm. On the right side
          of the screen are all the blocks. Try to organise them into the left
          side according to what you learned about decision trees previously. If
          you get stuck, or unsure, press the help button at the bottom of the
          screen. Good luck!
        </ExplanationDiv>
        <BackNextRow nextRoute="/generate-model/2" previousRoute="/webcam-1" />
      </Layout>
    </>
  );
}

export default GenerateModel1;
