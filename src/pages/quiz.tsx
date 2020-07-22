import React from "react";
import { Layout, Button, Title } from "../styles";
import styled from "styled-components";
import { QuizQuestions } from "../data/quiz-questions";
import Quiz from "react-quiz-component";
import Header from "../components/header";
import { useHistory } from "react-router-dom";
import { useToggle } from "@umijs/hooks";
import { Routes } from "../router";

const QuizDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 450px;
  background-color: var(--div1Blue);
  border-radius: 8px;
  overflow-y: scroll;
  margin: 20px;
  padding: 20px;
  font-size: 1.5em;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
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
          <Quiz
            quiz={QuizQuestions}
            shuffle={true}
            onComplete={() => toggle()}
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
