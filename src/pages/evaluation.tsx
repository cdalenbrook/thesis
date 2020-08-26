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
  font-size: 1.25em;
  line-height: 25px;
`;

function Evaluation() {
  return (
    <>
      <Layout>
        <Header />
        <Title>How did Yuki Do?</Title>
        <ExplanationDiv>
          Did Yuki predict the new toy(s) correctly? If you tested many new toys
          and compared the prediction Yuki made to the correct answer you could
          calculate the accuracy of the decision tree classifier.
          <br></br>
          <br></br>
          If Yuki got the category of the new toy you tested right, then for
          now, the accuracy of the decision tree classified is 100%. If he got
          the category wrong, for now the accuracy is 0%.
          <br></br>
          <br></br>
          But let’s say that you showed Yuki 10 new toys, and he got 8 of their
          categories right, and 2 wrong. This would mean Yuki is right 8 out of
          10 times and therefore 80% accurate.
          <br></br>
          <br></br>
          Anything above an accuracy of 50% is quite good. This is because if
          Yuki would guess the category, he would have a 1 in 2 chance of being
          right, since there are only 2 categories. This means that by guessing,
          Yuki would probably get the answer right half the time.
        </ExplanationDiv>
        <BackNextRow nextRoute="/conclusion" previousRoute="/webcam-2" />
      </Layout>
    </>
  );
}

export default Evaluation;
