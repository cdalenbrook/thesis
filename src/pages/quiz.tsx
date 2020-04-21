import React from "react";
import { Layout, Button, Title } from "../styles";
import styled from "styled-components";
import { QuizQuestions } from "./quiz-questions";
import Quiz from "react-quiz-component";
import Header from "../components/header";
import { useHistory } from "react-router-dom";
import { useToggle } from "@umijs/hooks";
import { Routes } from "../router";

const QuizDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Progress = styled.div`
  border-radius: 20px;
  width: 100%;
`;

function QuizPage() {
  const router = useHistory();
  const { state, toggle } = useToggle(false);

  return (
    <>
      <Layout>
        <Header />
        <Title>Quiz</Title>
        <QuizDiv>
          <Progress></Progress>
          <Quiz
            quiz={QuizQuestions}
            shuffle={true}
            onComplete={() => toggle()}
            continueTillCorrect={true}
          />
        </QuizDiv>
        {state && (
          <Button onClick={() => router.push(Routes.getStarted)}>Done</Button>
        )}
      </Layout>
    </>
  );
}

export default QuizPage;
