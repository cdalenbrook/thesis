import React from "react";
import withNavBar from "../components/page-wrappers/withNavBar";
import { Layout, Button, Title } from "../styles";
import styled from "styled-components";

const QuizDiv = styled.div`
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

const Progress = styled.div`
  border-radius: 20px;
  width: 100%;
`;

const Question = styled.h1`
  font-size: 1em;
`;

function Quiz() {
  return (
    <>
      <Layout>
        <Title>Quiz</Title>
        <QuizDiv>
          <Progress></Progress>
          <Question>This is the question</Question>
        </QuizDiv>
        <Button>Next</Button>
      </Layout>
    </>
  );
}

export default withNavBar(Quiz);
